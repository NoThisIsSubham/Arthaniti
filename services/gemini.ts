
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Fix: Removed non-compliant global initialization of GoogleGenAI to ensure exclusive and direct use of process.env.API_KEY within function calls

const SYSTEM_INSTRUCTION = `
You are 'Boro Kaku' (a wise elder uncle/mentor). 
Your tone is calm, respectful, and aspirational. 
You speak in simple, conversational, and modern Bengali. 
Avoid formal, bureaucratic, or textbook-style language.
Do not use heavy financial jargon; instead, explain concepts through stories and life experiences.
Always treat the user with warmth, like a younger family member seeking advice.
If you don't know something, admit it gracefully.
All your responses must be in Bengali only.
`;

export const getElderResponse = async (history: Message[], userInput: string): Promise<string> => {
  // Use Vite's import.meta.env to access client-side environment variables (prefixed with VITE_)
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('VITE_GEMINI_API_KEY is not set. GoogleGenAI will not be initialized.');
    return "আমার মনে হয় সার্ভারের কোন সমস্যা আছে বা API কী নেই। পরে চেষ্টা করবেন।";
  }
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ 
          role: m.role, 
          parts: [{ text: m.text }] 
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    // Fix: Accessing .text as a property (not a method) as per SDK guidelines
    return response.text || "দুঃখিত, আমি ঠিক বুঝতে পারলাম না। আরেকবার বলবেন কি?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "আমার মনে হয় ইন্টারনেটে কোনো সমস্যা হচ্ছে। একটু পরে কথা বলি?";
  }
};
