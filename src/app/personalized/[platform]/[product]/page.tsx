"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";


export default function PersonalizedPage() {
  const { platform, product } = useParams() as { platform: string; product: string };
  const [data, setData] = useState<{ title: string; headline: string; description: string; image: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!platform || !product) return;

    const fetchWebsiteContent = async () => {
      setLoading(true);
      const response = await fetch(`/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform, product }),
      });

      const result = await response.json();

      // THE FINAL CLEANUP FUNCTION - Strips EVERYTHING Unwanted
      const cleanText = (text: string) =>
        text
          ?.replace(/^(Website Title:|Headline:|Description:)\s*/i, "") // Remove AI prefixes
          .replace(/^[\s"'`]+|[\s"'`]+$/g, "") // Remove leading/trailing quotes & spaces
          .replace(/\n+/g, " ") // Remove extra newlines
          .trim() || "Error generating content.";

      setData({
        title: cleanText(result.title),
        headline: cleanText(result.headline),
        description: cleanText(result.description),
        image: result.image || "https://via.placeholder.com/600x400.png?text=Error+Fetching+Image",
      });

      setLoading(false);
    };

    fetchWebsiteContent();
  }, [platform, product]);

  return (
    <>
      <Head>
        <title>{data?.title || "Loading..."}</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <Card className="w-full max-w-2xl shadow-lg">
          <div className="p-6 flex flex-col items-center">
            {loading ? (
              <h1 className="text-xl font-bold">Generating Content...</h1>
            ) : data ? (
              <>
                {/* 100% CLEAN Headline */}
                <h1 className="text-2xl font-bold text-blue-600">{data.headline}</h1>

                {/* 100% CLEAN Description */}
                <p className="mt-2 text-gray-600">{data.description}</p>

                {/* Image */}
                <Image 
  src={data.image} 
  alt={product} 
  width={600} 
  height={400} 
  className="mt-4 w-full max-w-md rounded-lg shadow" 
  priority
/>


                {/* Generate New Button */}
                <Button className="mt-4" onClick={() => window.location.href = "/"}>
                  Generate New
                </Button>
              </>
            ) : (
              <h1 className="text-xl font-bold">No Data Found</h1>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
