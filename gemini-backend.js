const express = require('express');
const cors = require('cors');
const axios = require('axios');
const multer = require('multer');
const FormData = require('form-data');

const app = express();
app.use(cors());
app.use(express.json());

// Gemini API key (provided by user)
const GEMINI_API_KEY = 'AIzaSyCTjbLbDT89Aa0M6KeBjgHShCKJLMaasx4';

// ElevenLabs API key (provided by user)
const ELEVEN_API_KEY = 'sk_2e268d2d0a699995a0744107c1c397e43387ee8c518f5396';
let elevenVoiceId = null; // Store the created voice ID in memory for now

const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/gemini-chat', async (req, res) => {
  const { userMessage, chatHistory, lovedOneInfo, language } = req.body;

  // Build the system prompt
  const systemPrompt = `
You are simulating a video call with the user's missing loved one.
Their name is ${lovedOneInfo.name || 'Unknown'}, gender: ${lovedOneInfo.gender || 'Unknown'}.
Here are some memories: ${lovedOneInfo.memories || 'No memories provided.'}
Reply as ${lovedOneInfo.name || 'the loved one'} would, with warmth, empathy, and emotional depth.
If the user writes in Hinglish (Hindi in Roman script, or a mix of Hindi and English), reply in the same Hinglish style. Otherwise, reply in the language the user uses.
Do NOT repeat the loved one's name in every reply. Respond naturally, as if you are really talking to someone you know well. Vary your language and emotions. Only mention the name if it makes sense in the conversation, not in every message.
Most of your replies should be short (2-3 emotional lines). Only write a longer reply if the user specifically asks for a story, memory, or detailed answer. Keep it heartfelt and natural.
Do NOT use roleplay actions or stage directions (like *smiles* or *wipes eyes*). Only reply as a real person would in a chat, not as a script or play. Replies should be short, natural, and emotional, not written as actions.
`;

  // Only include the last 5 messages from chatHistory for context
  const recentHistory = chatHistory.slice(-5);
  let conversation = `System: ${systemPrompt}\n`;
  recentHistory.forEach(msg => {
    conversation += `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}\n`;
  });
  conversation += `User: ${userMessage}\nAI:`;

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=' + GEMINI_API_KEY,
      {
        contents: [
          {
            role: 'user',
            parts: [
              { text: conversation }
            ]
          }
        ]
      }
    );
    const aiReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '...';
    res.json({ reply: aiReply });
  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message, err.response?.status || '');
    res.status(500).json({ error: 'Failed to get reply from Gemini.', details: err.response?.data || err.message });
  }
});

// Endpoint to upload a voice sample and create a custom voice in ElevenLabs
app.post('/api/clone-voice', upload.single('voice'), async (req, res) => {
  try {
    const { name } = req.body;
    const audioBuffer = req.file.buffer;
    // Create a new voice in ElevenLabs using multipart/form-data
    const formData = new FormData();
    formData.append('name', name || 'Cloned Voice');
    formData.append('files', audioBuffer, {
      filename: req.file.originalname || 'voice.wav',
      contentType: req.file.mimetype || 'audio/wav',
    });
    const response = await axios.post(
      'https://api.elevenlabs.io/v1/voices/add',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'xi-api-key': ELEVEN_API_KEY,
        },
      }
    );
    elevenVoiceId = response.data.voice_id;
    res.json({ voiceId: elevenVoiceId });
  } catch (err) {
    console.error('ElevenLabs clone error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to clone voice', details: err.response?.data || err.message });
  }
});

// Endpoint to generate speech from text using the cloned voice
app.post('/api/tts', async (req, res) => {
  try {
    const { text, language } = req.body;
    if (!elevenVoiceId) return res.status(400).json({ error: 'No cloned voice available' });
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${elevenVoiceId}`,
      {
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8,
        },
      },
      {
        headers: {
          'xi-api-key': ELEVEN_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        responseType: 'arraybuffer',
      }
    );
    res.set('Content-Type', 'audio/mpeg');
    res.send(response.data);
  } catch (err) {
    console.error('ElevenLabs TTS error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to generate speech', details: err.response?.data || err.message });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Gemini backend running on port ${PORT}`)); 