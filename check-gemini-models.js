require('dotenv').config();
const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

axios.get('https://generativelanguage.googleapis.com/v1/models?key=' + GEMINI_API_KEY)
  .then(res => console.log(res.data))
  .catch(err => console.error(err.response?.data || err.message)); 
