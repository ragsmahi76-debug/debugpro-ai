import OpenAI from "openai";

// ✅ FORCE FIX (no env confusion)
const client = new OpenAI({
  const API_KEY = process.env.OPENAI_API_KEY;

});

export const callAI = async (code) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert code debugger."
        },
        {
          role: "user",
          content: `Find bugs and improve this code:\n\n${code}`
        }
      ]
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("AI ERROR:", error.message);
    return "AI failed to respond";
  }
};