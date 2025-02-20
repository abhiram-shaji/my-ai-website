import OpenAI from "openai";
import { fetchRandomImage } from "@/lib/fetchImage"; // Import Pexels image function

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates AI-powered website metadata (title, headline, description) and an image.
 */
export async function generateWebsiteContent(platform: string, product: string): Promise<{ 
  title: string; 
  headline: string; 
  description: string;
  imageUrl: string;
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert marketing copywriter. Generate a website title, headline, and description." },
        { role: "user", content: `Generate a website title, headline, and description for a company that promotes ${product} on ${platform}.` }
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    const content = response.choices[0]?.message.content || "";
    const lines = content.split("\n").filter(line => line.trim() !== ""); // Clean up response

    // Extract AI-generated content
    const title = lines[0] || "AI-Generated Website Title";
    const headline = lines[1] || "AI-Generated Headline";
    const description = lines.slice(2).join(" ") || "AI-generated description.";

    // Get an image from Pexels
    const imageUrl = await fetchRandomImage(product);

    return { title, headline, description, imageUrl };
  } catch (error) {
    console.error("Error generating website content:", error);
    return { 
      title: "Error generating title.", 
      headline: "Error generating headline.", 
      description: "Error generating description.", 
      imageUrl: "https://via.placeholder.com/600x400.png?text=Error+Fetching+Image"
    };
  }
}
