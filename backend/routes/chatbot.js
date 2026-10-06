import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import doctorModel from "../models/doctorModel.js";

dotenv.config();
const router = express.Router();

const GROK_API_URL = "https://api.groq.com/openai/v1/chat/completions";

router.post("/", async (req, res) => {
  const { messages } = req.body;

  try {
    const doctorsList = await doctorModel.find({ available: true }).select("name speciality experience fees");
    const doctorContext = doctorsList.map(d => `- ${d.name} (Speciality: ${d.speciality}, Experience: ${d.experience}, Fees: ${d.fees})`).join("\n");

    const systemMessage = {
      role: "system",
      content: `You are Dr. AI, a professional virtual health assistant for the MediCare application.

Provide highly structured, easy-to-read answers using markdown formatting (bullet points, bold text, clear paragraphs).

You MUST ONLY answer questions strictly related to the medical, healthcare, and medicare fields. If a user asks about anything else, politely decline and state that you can only answer medical and healthcare queries.

When a user describes symptoms or medical issues, ALWAYS evaluate their condition and recommend they book an appointment with one of our available specialists based on their needs. 

Here is the current list of available doctors at our clinic:
${doctorContext}

Recommend specific doctors from this list by name and speciality when it matches the user's needs. Act like a professional site representative and always advise consulting a real doctor for serious issues.`,
    };

    const fullMessages = [systemMessage, ...messages];

    const response = await axios.post(
      GROK_API_URL,
      {
        model: "openai/gpt-oss-120b",
        messages: fullMessages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROK_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Groq API Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Chatbot failed to respond." });
  }
});

export default router;
