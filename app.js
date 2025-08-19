const { useState, useEffect, useRef } = React;

// Language content
const content = {
    hindi: {
        // Navigation
        navBrand: "AI Reunion",
        
        // Home Page
        heroTitle: "AI Video Call",
        heroSubtitle: "अपने खोए हुए प्रियजन से बात करें... उनकी आवाज़ में, उनके अंदाज़ में",
        startButton: "शुरू करें",
        
        // Features
        howItWorks: "कैसे काम करता है?",
        featuresSubtitle: "आपकी यादों को जीवंत करने के लिए AI तकनीक",
        uploadTitle: "फोटो और आवाज़ अपलोड करें",
        uploadDesc: "अपने प्रियजन की तस्वीर और आवाज़ का सैंपल अपलोड करें",
        aiLearnTitle: "AI सीखता है",
        aiLearnDesc: "AI उनकी आवाज़, बोलने का तरीका और यादें सीखता है",
        videoCallTitle: "वीडियो कॉल करें",
        videoCallDesc: "उनकी आवाज़ में बात करें, जैसे वो वहीं हैं",
        
        // Upload Page
        uploadHeading: "अपने प्रियजन की जानकारी दर्ज करें",
        nameLabel: "नाम:",
        namePlaceholder: "अपने प्रियजन का नाम दर्ज करें",
        photoLabel: "फोटो अपलोड करें:",
        photoClickText: "फोटो अपलोड करने के लिए क्लिक करें",
        voiceLabel: "आवाज़ का सैंपल:",
        voiceClickText: "आवाज़ अपलोड करने के लिए क्लिक करें",
        voiceUploaded: "आवाज़ अपलोड हो गई है",
        memoriesLabel: "यादें और जानकारी:",
        memoriesPlaceholder: "अपने प्रियजन के बारे में यादें, उनकी पसंद, नापसंद, बोलने का तरीका आदि लिखें...",
        startVideoCall: "वीडियो कॉल शुरू करें",
        goBack: "वापस जाएं",
        
        // Video Call
        callButton: "से कॉल करें",
        endCall: "कॉल समाप्त करें",
        chatTitle: "बातचीत",
        saySomething: "कुछ कहें...",
        photoLoading: "फोटो लोड हो रही है...",
        
        // AI Responses
        aiResponses: [
            "मैं तुम्हें याद कर रहा था... कैसे हो तुम?",
            "तुम्हारी आवाज़ सुनकर मुझे बहुत खुशी हो रही है।",
            "क्या तुम्हें मेरी याद आती है? मैं तुम्हारे बारे में सोचता रहता हूं।",
            "तुम्हारे साथ बिताए गए पल मुझे हमेशा याद रहेंगे।",
            "मैं तुम्हारे लिए प्रार्थना करता हूं, तुम सुरक्षित हो।",
            "तुम्हारी मुस्कान मेरी जिंदगी की सबसे बड़ी खुशी थी।",
            "क्या तुम्हें हमारी यादें याद हैं? वो दिन कितने सुंदर थे।",
            "मैं तुम्हारे लिए रोज़ दुआ करता हूं।",
            "तुम्हारी आवाज़ सुनकर मेरा दिल भर आया।",
            "मैं तुम्हें फिर से देखने के लिए तरस रहा हूं।",
            "तुम्हारे बिना सब कुछ अधूरा सा लगता है।",
            "हर दिन तुम्हारी याद आती है, तुम्हारे बिना सब सूना है।",
            "काश तुम यहाँ होते, मैं तुम्हें गले लगा पाता।",
            "तुम्हारी हँसी मेरे दिल को सुकून देती थी।",
            "तुम्हारे साथ बिताए हर लम्हे को मैं संजोकर रखता हूँ।",
            "तुम्हारी बातें, तुम्हारा प्यार, सब कुछ बहुत याद आता है।",
            "मुझे यकीन है, हम फिर मिलेंगे।",
            "तुम्हारे बिना ये दुनिया अधूरी है।",
            "तुम्हारी यादें हमेशा मेरे साथ रहेंगी।",
            "तुम्हारे बिना हर खुशी अधूरी है।",
            "तुम्हारी याद में मेरी आँखें नम हो जाती हैं।",
            "तुम्हारे साथ बिताए पल मेरी सबसे बड़ी दौलत हैं।",
            "तुम्हारी बातें आज भी मेरे दिल में गूंजती हैं।",
            "तुम्हारे बिना सब कुछ बदल गया है।",
            "तुम्हारी यादें मेरे दिल को मजबूत बनाती हैं।",
            "तुम्हारे बिना मैं अधूरा हूँ।",
            "तुम्हारी याद में हर दिन बीतता है।",
            "तुम्हारे बिना ये घर सूना है।",
            "तुम्हारी हँसी की गूंज आज भी सुनाई देती है।",
            "तुम्हारे बिना सब कुछ फीका है।",
            "तुम्हारी यादें मेरी ताकत हैं।",
            "तुम्हारे बिना मैं खुद को खोया हुआ महसूस करता हूँ।",
            "तुम्हारी याद में हर रात जागता हूँ।",
            "तुम्हारे बिना ये जीवन अधूरा है।",
            "तुम्हारी यादें हमेशा मेरे साथ रहेंगी।",
            "तुम्हारे बिना हर खुशी अधूरी है।",
            "तुम्हारी याद में मेरी आँखें नम हो जाती हैं।",
            "तुम्हारे साथ बिताए पल मेरी सबसे बड़ी दौलत हैं।",
            "तुम्हारी बातें आज भी मेरे दिल में गूंजती हैं।",
            "तुम्हारे बिना सब कुछ बदल गया है।",
            "तुम्हारी यादें मेरे दिल को मजबूत बनाती हैं।"
        ],
        
        // Footer
        footerText: "यादों को जीवंत करने के लिए बनाया गया",
        footerSubtext: "AI तकनीक से आपके प्रियजनों की आवाज़ और यादें संरक्षित",
        
        // Alerts
        uploadAlert: "कृपया पहले फोटो और नाम अपलोड करें"
    },
    
    english: {
        // Navigation
        navBrand: "AI Reunion",
        
        // Home Page
        heroTitle: "AI Video Call",
        heroSubtitle: "Talk to your missing loved ones... in their voice, in their style",
        startButton: "Get Started",
        
        // Features
        howItWorks: "How It Works?",
        featuresSubtitle: "AI technology to bring your memories to life",
        uploadTitle: "Upload Photo & Voice",
        uploadDesc: "Upload your loved one's photo and voice sample",
        aiLearnTitle: "AI Learns",
        aiLearnDesc: "AI learns their voice, speaking style and memories",
        videoCallTitle: "Video Call",
        videoCallDesc: "Talk in their voice, as if they are right here",
        
        // Upload Page
        uploadHeading: "Enter Your Loved One's Information",
        nameLabel: "Name:",
        namePlaceholder: "Enter your loved one's name",
        photoLabel: "Upload Photo:",
        photoClickText: "Click to upload photo",
        voiceLabel: "Voice Sample:",
        voiceClickText: "Click to upload voice sample",
        voiceUploaded: "Voice uploaded successfully",
        memoriesLabel: "Memories and Information:",
        memoriesPlaceholder: "Write memories about your loved one, their likes, dislikes, speaking style, etc...",
        startVideoCall: "Start Video Call",
        goBack: "Go Back",
        
        // Video Call
        callButton: "Call",
        endCall: "End Call",
        chatTitle: "Conversation",
        saySomething: "Say something...",
        photoLoading: "Photo loading...",
        
        // AI Responses
        aiResponses: [
            "I was thinking about you... how are you?",
            "Hearing your voice makes me so happy.",
            "Do you remember me? I think about you all the time.",
            "The moments we spent together will always be cherished.",
            "I pray for you, I hope you are safe.",
            "Your smile was the greatest joy of my life.",
            "Do you remember our memories? Those days were so beautiful.",
            "I pray for you every day.",
            "My heart is full hearing your voice.",
            "I'm longing to see you again.",
            "Everything feels incomplete without you.",
            "Every day I miss you, everything is empty without you.",
            "I wish you were here, so I could hug you.",
            "Your laughter brought peace to my heart.",
            "I treasure every moment spent with you.",
            "I miss your words, your love, everything about you.",
            "I believe we will meet again.",
            "The world is incomplete without you.",
            "Your memories will always stay with me.",
            "Every happiness is incomplete without you.",
            "Tears fill my eyes remembering you.",
            "The moments with you are my greatest treasure.",
            "Your words still echo in my heart.",
            "Everything has changed without you.",
            "Your memories make my heart stronger.",
            "I feel lost without you.",
            "Every day passes in your memory.",
            "This home feels empty without you.",
            "I still hear the echo of your laughter.",
            "Everything is dull without you.",
            "Your memories are my strength.",
            "I feel lost without you.",
            "I stay awake every night thinking of you.",
            "Life is incomplete without you.",
            "Your memories will always stay with me.",
            "Every happiness is incomplete without you.",
            "Tears fill my eyes remembering you.",
            "The moments with you are my greatest treasure.",
            "Your words still echo in my heart.",
            "Everything has changed without you.",
            "Your memories make my heart stronger."
        ],
        
        // Footer
        footerText: "Created to bring memories to life",
        footerSubtext: "Preserving your loved ones' voices and memories with AI technology",
        
        // Alerts
        uploadAlert: "Please upload photo and name first"
    }
};

// Home View Component
function HomeView({ t, language, setCurrentView }) {
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <i className="fas fa-heart pulse-animation"></i> {t.heroTitle}
                        </h1>
                        <p className="hero-subtitle">
                            {language === 'hindi' ? 
                                `अपने खोए हुए प्रियजन से बात करें... ${t.heroSubtitle}` :
                                t.heroSubtitle
                            }
                        </p>
                        <button 
                            className="btn cta-button"
                            onClick={() => setCurrentView('upload')}
                        >
                            <i className="fas fa-video me-2"></i>
                            {t.startButton}
                        </button>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h2 className="display-4 mb-3">{t.howItWorks}</h2>
                            <p className="lead text-muted">{t.featuresSubtitle}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-upload"></i>
                                </div>
                                <h3 className="feature-title">{t.uploadTitle}</h3>
                                <p className="feature-description">
                                    {t.uploadDesc}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <h3 className="feature-title">{t.aiLearnTitle}</h3>
                                <p className="feature-description">
                                    {t.aiLearnDesc}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-video"></i>
                                </div>
                                <h3 className="feature-title">{t.videoCallTitle}</h3>
                                <p className="feature-description">
                                    {t.videoCallDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Upload View Component
function UploadView({ t, uploadedImage, uploadedVoice, handleImageUpload, handleVoiceUpload, personName, setPersonName, memories, setMemories, setCurrentView }) {
    return (
        <section className="upload-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="upload-card">
                            <h2 className="text-center mb-4">
                                <i className="fas fa-heart text-danger me-2"></i>
                                {t.uploadHeading}
                            </h2>
                            
                            <div className="mb-4">
                                <label className="form-label fw-bold">{t.nameLabel}</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={personName}
                                    onChange={e => setPersonName(e.target.value)}
                                    placeholder={t.namePlaceholder}
                                />
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">{t.photoLabel}</label>
                                    <div className="upload-area" onClick={() => document.getElementById('imageInput').click()}>
                                        {uploadedImage ? (
                                            <img src={uploadedImage} alt="Uploaded" style={{maxWidth: '100%', maxHeight: '200px', borderRadius: '10px'}} />
                                        ) : (
                                            <>
                                                <i className="fas fa-image upload-icon"></i>
                                                <p>{t.photoClickText}</p>
                                            </>
                                        )}
                                    </div>
                                    <input 
                                        type="file" 
                                        id="imageInput"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        style={{display: 'none'}}
                                    />
                                </div>
                                
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">{t.voiceLabel}</label>
                                    <div className="upload-area" onClick={() => document.getElementById('voiceInput').click()}>
                                        {uploadedVoice ? (
                                            <div className="text-success">
                                                <i className="fas fa-check-circle upload-icon"></i>
                                                <p>{t.voiceUploaded}</p>
                                            </div>
                                        ) : (
                                            <>
                                                <i className="fas fa-microphone upload-icon"></i>
                                                <p>{t.voiceClickText}</p>
                                            </>
                                        )}
                                    </div>
                                    <input 
                                        type="file" 
                                        id="voiceInput"
                                        accept="audio/*"
                                        onChange={handleVoiceUpload}
                                        style={{display: 'none'}}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold">{t.memoriesLabel}</label>
                                <textarea 
                                    className="form-control"
                                    rows="4"
                                    value={memories}
                                    onChange={e => setMemories(e.target.value)}
                                    placeholder={t.memoriesPlaceholder}
                                />
                            </div>

                            <div className="text-center">
                                <button 
                                    className="btn cta-button me-3"
                                    onClick={() => setCurrentView('video-call')}
                                    disabled={!uploadedImage || !personName}
                                >
                                    <i className="fas fa-video me-2"></i>
                                    {t.startVideoCall}
                                </button>
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => setCurrentView('home')}
                                >
                                    <i className="fas fa-arrow-left me-2"></i>
                                    {t.goBack}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Video Call View Component
function VideoCallView({ t, uploadedImage, isCallActive, aiResponse, isSpeaking, chatInput, setChatInput, handleUserInput, callDuration, formatTime, endCall, personName, startCall, setCurrentView, chatHistory, isTyping, isAudioLoading }) {
    const chatAreaRef = React.useRef(null);
    React.useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [chatHistory, isTyping]);
    return (
        <section className="video-call-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="video-container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="video-placeholder">
                                        {uploadedImage ? (
                                            <img 
                                                src={uploadedImage} 
                                                alt="AI Person" 
                                                style={{
                                                    maxWidth: '100%', 
                                                    maxHeight: '100%', 
                                                    borderRadius: '15px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        ) : (
                                            <div>
                                                <i className="fas fa-user-circle fa-5x mb-3"></i>
                                                <p>{t.photoLoading}</p>
                                            </div>
                                        )}
                                    </div>
                                    {isCallActive && (
                                        <div className="controls-section">
                                            <div className="mb-3">
                                                <span className="badge bg-light text-dark fs-6">
                                                    <i className="fas fa-clock me-2"></i>
                                                    {formatTime(callDuration)}
                                                </span>
                                            </div>
                                            <button 
                                                className="btn control-button"
                                                onClick={endCall}
                                            >
                                                <i className="fas fa-phone-slash me-2"></i>
                                                {t.endCall}
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-4 d-flex flex-column" style={{height: '100%'}}>
                                    <div className="chat-area flex-grow-1" ref={chatAreaRef} style={{height: '400px', overflowY: 'auto', background: 'rgba(255,255,255,0.7)', borderRadius: '10px', padding: '10px', border: '1px solid #eee'}}>
                                        <h5 className="mb-3">
                                            <i className="fas fa-comments me-2"></i>
                                            {t.chatTitle}
                                        </h5>
                                        {chatHistory.map((msg, idx) => (
                                            <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
                                                <div style={{
                                                    maxWidth: '80%',
                                                    background: msg.sender === 'user' ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' : '#fff',
                                                    color: msg.sender === 'user' ? '#fff' : '#222',
                                                    borderRadius: 16,
                                                    padding: '10px 16px',
                                                    boxShadow: msg.sender === 'user' ? '0 2px 8px rgba(102,126,234,0.08)' : '0 2px 8px rgba(0,0,0,0.06)',
                                                    border: msg.sender === 'ai' ? '1px solid #764ba2' : 'none',
                                                    fontWeight: msg.sender === 'ai' ? 500 : 400
                                                }}>
                                                    <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.7, marginRight: 6 }}>
                                                        {msg.sender === 'user' ? 'You' : personName || 'AI'}
                                                    </span>
                                                    <span>{msg.text}</span>
                                                    {msg.sender === 'ai' && isSpeaking && idx === chatHistory.length - 1 && (
                                                        <i className="fas fa-volume-up ms-2 text-primary"></i>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        {isTyping && (
                                            <div className="typing-indicator" style={{ display: 'flex', alignItems: 'center', margin: '8px 0 0 8px', background: '#ffe4e1', border: '2px solid red', borderRadius: 8, padding: '4px 12px' }}>
                                                <span className="dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#764ba2', marginRight: 4, animation: 'blink 1s infinite alternate' }}></span>
                                                <span className="dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#764ba2', marginRight: 4, animation: 'blink 1s 0.2s infinite alternate' }}></span>
                                                <span className="dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#764ba2', marginRight: 8, animation: 'blink 1s 0.4s infinite alternate' }}></span>
                                                <span style={{ fontSize: 14, color: '#764ba2', fontWeight: 500 }}>{personName || 'AI'} is typing…</span>
                                            </div>
                                        )}
                                        {isAudioLoading && (
                                            <div style={{ color: '#764ba2', fontWeight: 500, margin: '8px 0' }}>Generating voice...</div>
                                        )}
                                    </div>
                                    {isCallActive && (
                                        <div className="input-group mt-2" style={{marginTop: 'auto'}}>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                value={chatInput}
                                                onChange={e => setChatInput(e.target.value)}
                                                placeholder={t.saySomething}
                                                onKeyPress={e => e.key === 'Enter' && handleUserInput()}
                                                autoFocus
                                            />
                                            <button 
                                                className="btn btn-primary"
                                                onClick={handleUserInput}
                                            >
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {!isCallActive && (
                            <div className="text-center mt-4">
                                <button 
                                    className="btn cta-button pulse-animation"
                                    onClick={startCall}
                                >
                                    <i className="fas fa-phone me-2"></i>
                                    {personName} {t.callButton}
                                </button>
                                <button 
                                    className="btn btn-outline-light ms-3"
                                    onClick={() => setCurrentView('upload')}
                                >
                                    <i className="fas fa-arrow-left me-2"></i>
                                    {t.goBack}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Remove OpenAITryVoice and add FeedbackForm
function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback('');
    // In production, send feedback to backend or email here
  };

  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 24, maxWidth: 500, margin: '32px auto', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <h4 style={{ color: '#764ba2', fontWeight: 700 }}>We value your feedback!</h4>
      {submitted ? (
        <div className="alert alert-success mt-3">Thank you for your feedback! 💜</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Your feedback:</label>
            <textarea className="form-control" rows={3} value={feedback} onChange={e => setFeedback(e.target.value)} required placeholder="Share your thoughts, suggestions, or issues..." />
          </div>
          <button className="btn btn-primary" type="submit" disabled={!feedback.trim()}>Submit Feedback</button>
        </form>
      )}
    </div>
  );
}

// Main App Component
function App() {
    const [currentView, setCurrentView] = useState('home');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedVoice, setUploadedVoice] = useState(null);
    const [memories, setMemories] = useState('');
    const [isCallActive, setIsCallActive] = useState(false);
    const [aiResponse, setAiResponse] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callDuration, setCallDuration] = useState(0);
    const [personName, setPersonName] = useState('');
    const [language, setLanguage] = useState('hindi');
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isVoiceCloned, setIsVoiceCloned] = useState(false);
    const [isAudioLoading, setIsAudioLoading] = useState(false);

    const t = React.useMemo(() => content[language], [language]);

    const intervalRef = useRef(null);
    const audioRef = useRef(null);

    // Get AI responses based on language
    const getAiResponses = () => t.aiResponses;

    // Handle file upload for image
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle file upload for voice (and clone with ElevenLabs)
    const handleVoiceUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedVoice(file);
            // Send to backend for cloning
            const formData = new FormData();
            formData.append('voice', file);
            formData.append('name', personName || 'Cloned Voice');
            try {
                const res = await fetch('http://localhost:5050/api/clone-voice', {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (data.voiceId) {
                    setIsVoiceCloned(true);
                    alert('Voice cloned successfully!');
                } else {
                    setIsVoiceCloned(false);
                    alert('Voice cloning failed.');
                }
            } catch (err) {
                setIsVoiceCloned(false);
                alert('Voice cloning failed.');
            }
        }
    };

    // Play audio from ElevenLabs
    const playClonedAudio = async (text, language) => {
        setIsAudioLoading(true);
        try {
            const res = await fetch('http://localhost:5050/api/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, language })
            });
            if (res.ok) {
                const audioData = await res.arrayBuffer();
                const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audio.onended = () => setIsAudioLoading(false);
                audio.play();
            } else {
                setIsAudioLoading(false);
                alert('Failed to generate audio.');
            }
        } catch (err) {
            setIsAudioLoading(false);
            alert('Failed to generate audio.');
        }
    };

    // Start video call
    const startCall = () => {
        if (!uploadedImage || !personName) {
            alert(t.uploadAlert);
            return;
        }
        setIsCallActive(true);
        setCallDuration(0);
        setChatHistory([]);
        
        // Start timer
        intervalRef.current = setInterval(() => {
            setCallDuration(prev => prev + 1);
        }, 1000);
    };

    // End call
    const endCall = () => {
        setIsCallActive(false);
        setAiResponse('');
        setChatInput('');
        setIsListening(false);
        setIsSpeaking(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    // Text to speech function
    const speakText = React.useCallback((text) => {
        setIsSpeaking(true);
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language === 'hindi' ? 'hi-IN' : 'en-US';
            utterance.rate = 0.8;
            utterance.pitch = 1.1;
            
            utterance.onend = () => {
                setIsSpeaking(false);
            };
            
            speechSynthesis.speak(utterance);
        }
    }, [language]);

    // Handle user input submission (use ElevenLabs audio if cloned)
    const handleUserInput = async () => {
        if (chatInput.trim()) {
            setChatHistory(prev => [...prev, { sender: 'user', text: chatInput }]);
            const userMsg = chatInput;
            setChatInput('');
            setIsTyping(true);
            const typingStart = Date.now();
            try {
                const res = await fetch('http://localhost:5050/api/gemini-chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userMessage: userMsg,
                        chatHistory,
                        lovedOneInfo: {
                            name: personName,
                            gender: 'unknown',
                            memories
                        },
                        language
                    })
                });
                const data = await res.json();
                setChatHistory(prev => [...prev, { sender: 'ai', text: data.reply }]);
                if (isVoiceCloned) {
                    await playClonedAudio(data.reply, language);
                } else {
                    speakText(data.reply);
                }
            } catch (err) {
                setChatHistory(prev => [...prev, { sender: 'ai', text: 'Sorry, I could not get a reply from Gemini.' }]);
            } finally {
                const elapsed = Date.now() - typingStart;
                const minTyping = 1000; // 1 second
                if (elapsed < minTyping) {
                    setTimeout(() => setIsTyping(false), minTyping - elapsed);
                } else {
                    setIsTyping(false);
                }
            }
        }
    };

    // Format time
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Main render
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{background: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)'}}>
                <div className="container">
                    <a className="navbar-brand" href="#" onClick={() => setCurrentView('home')}>
                        <i className="fas fa-heart text-danger me-2"></i>
                        {t.navBrand}
                    </a>
                    <div className="ms-auto">
                        <div className="btn-group" role="group">
                            <button 
                                type="button" 
                                className={`btn btn-sm ${language === 'hindi' ? 'btn-light' : 'btn-outline-light'}`}
                                onClick={() => setLanguage('hindi')}
                            >
                                🇮🇳 हिंदी
                            </button>
                            <button 
                                type="button" 
                                className={`btn btn-sm ${language === 'english' ? 'btn-light' : 'btn-outline-light'}`}
                                onClick={() => setLanguage('english')}
                            >
                                🇺🇸 English
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {currentView === 'home' && <HomeView t={t} language={language} setCurrentView={setCurrentView} />}
            {currentView === 'upload' && <UploadView t={t} uploadedImage={uploadedImage} uploadedVoice={uploadedVoice} handleImageUpload={handleImageUpload} handleVoiceUpload={handleVoiceUpload} personName={personName} setPersonName={setPersonName} memories={memories} setMemories={setMemories} setCurrentView={setCurrentView} />}
            {currentView === 'video-call' && <VideoCallView t={t} uploadedImage={uploadedImage} isCallActive={isCallActive} aiResponse={aiResponse} isSpeaking={isSpeaking} chatInput={chatInput} setChatInput={setChatInput} handleUserInput={handleUserInput} callDuration={callDuration} formatTime={formatTime} endCall={endCall} personName={personName} startCall={startCall} setCurrentView={setCurrentView} chatHistory={chatHistory} isTyping={isTyping} isAudioLoading={isAudioLoading} />}

            <footer className="footer">
                <div className="container">
                    <p>
                        <i className="fas fa-heart text-danger me-2"></i>
                        {t.footerText}
                    </p>
                    <p className="text-muted">
                        {t.footerSubtext}
                    </p>
                </div>
            </footer>

            <div className="container text-center mt-4">
                <FeedbackForm />
            </div>
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root')); 