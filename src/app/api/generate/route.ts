import { NextResponse } from "next/server";
import { generateWebsiteContent } from "@/lib/generateContent";

export async function POST(req: Request) {
  try {
    const { platform, product } = await req.json();

    if (!platform || !product) {
      return NextResponse.json({ error: "Platform and product are required." }, { status: 400 });
    }

    const { title, headline, description, imageUrl } = await generateWebsiteContent(platform, product);
    return NextResponse.json({ title, headline, description, image: imageUrl });
  } catch (error) {
    console.error("Error generating website content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
