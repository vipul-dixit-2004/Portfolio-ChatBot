import { config } from 'dotenv';
config();

// chatbot.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import getUser from './getUser.js'

// Load your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Load the model (Gemini Pro)
async function chatBot(userId, message) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const chat = getUser(model, userId);
  const result = await chat.sendMessage(message);
  const response = result.response;
  // console.log(response)
  return response.text();
}

export default chatBot;

