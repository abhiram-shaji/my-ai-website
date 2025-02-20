import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Securely load API Key
});

/**
 * Generates AI-powered ad content based on platform and product details.
 */
export async function generateAdContent(platform: string, product: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Use GPT-4 for better results
      messages: [
        { role: "system", content: "You are an expert ad copywriter." },
        { role: "user", content: `Write a compelling ad for ${product} on ${platform}.` }
      ],
      temperature: 0.7, // Adjust for creativity
      max_tokens: 100,
    });

    return response.choices[0]?.message.content || "AI-generated ad content unavailable.";
  } catch (error) {
    console.error("Error generating ad content:", error);
    return "Error: Could not generate AI-powered content.";
  }
}
