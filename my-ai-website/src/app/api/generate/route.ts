import { NextResponse } from "next/server";
import { generateAdContent } from "@/lib/generateContent";

export async function POST(req: Request) {
  try {
    const { platform, product } = await req.json();

    if (!platform || !product) {
      return NextResponse.json({ error: "Platform and product are required." }, { status: 400 });
    }

    const { adText, imageUrl } = await generateAdContent(platform, product);
    return NextResponse.json({ adContent: adText, image: imageUrl });
  } catch (error) {
    console.error("Error generating ad content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
