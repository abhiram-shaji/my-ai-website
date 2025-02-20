"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function PersonalizedPage() {
  const { id } = useParams() as { id: string }; // Ensure id is a string
  const [data, setData] = useState<{ title: string; headline: string; description: string; image: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchWebsiteContent = async () => {
      setLoading(true);
      const response = await fetch(`/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform: "Google", product: id }),
      });

      const result = await response.json();

      // ✅ Remove "Headline:" and "Description:" from API response
      setData({
        title: result.title?.replace(/^Website Title:\s*/, "") || "Error generating title.",
        headline: result.headline?.replace(/^Headline:\s*/, "") || "Error generating headline.",
        description: result.description?.replace(/^Description:\s*/, "") || "Error generating description.",
        image: result.image || "https://via.placeholder.com/600x400.png?text=Error+Fetching+Image",
      });

      setLoading(false);
    };

    fetchWebsiteContent();
  }, [id]);

  return (
    <>
      {/* ✅ Set Tab Title */}
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
                {/* ✅ Headline as h1 (No "Headline:" prefix) */}
                <h1 className="text-2xl font-bold text-blue-600">{data.headline}</h1>

                {/* ✅ Description (No "Description:" prefix) */}
                <p className="mt-2 text-gray-600">{data.description}</p>

                {/* ✅ Image */}
                <img src={data.image} alt={id} className="mt-4 w-full max-w-md rounded-lg shadow" />

                {/* ✅ Generate New Button */}
                <Button className="mt-4" onClick={() => window.location.href = "/personalized"}>
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
