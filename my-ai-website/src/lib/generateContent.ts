import OpenAI from "openai";
import { fetchRandomImage } from "@/lib/fetchImage"; // Import the Pexels function

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates AI-powered ad content and fetches a relevant image.
 */
export async function generateAdContent(platform: string, product: string): Promise<{ adText: string; imageUrl: string }> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert ad copywriter. Generate an ad and suggest a relevant image." },
        { role: "user", content: `Write a compelling ad for ${product} on ${platform}.` }
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    const adText = response.choices[0]?.message.content || "AI-generated ad content unavailable.";
    const imageUrl = await fetchRandomImage(product); // Get an image from Pexels

    return { adText, imageUrl };
  } catch (error) {
    console.error("Error generating ad content:", error);
    return { adText: "Error generating content.", imageUrl: "https://via.placeholder.com/600x400.png?text=Error+Fetching+Image" };
  }
}
