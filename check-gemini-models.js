const axios = require('axios');

const GEMINI_API_KEY = 'AIzaSyCTjbLbDT89Aa0M6KeBjgHShCKJLMaasx4'; // Use your Gemini API key here

axios.get('https://generativelanguage.googleapis.com/v1/models?key=' + GEMINI_API_KEY)
  .then(res => console.log(res.data))
  .catch(err => console.error(err.response?.data || err.message)); 