import { NextResponse } from "next/server";
import { generateAdContent } from "@/lib/generateContent";

/**
 * API route to generate AI-powered ad content.
 * Accepts POST requests with `platform` and `product` in JSON body.
 */
export async function POST(req: Request) {
  try {
    // Parse incoming request data
    const { platform, product } = await req.json();

    // Validate input
    if (!platform || !product) {
      return NextResponse.json({ error: "Platform and product are required." }, { status: 400 });
    }

    // Generate AI-powered ad content
    const adContent = await generateAdContent(platform, product);

    // Return response
    return NextResponse.json({ adContent });
  } catch (error) {
    console.error("Error generating ad content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
