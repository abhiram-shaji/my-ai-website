"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

      // Ensure we have fallback values
      setData({
        title: result.title || "Error generating title.",
        headline: result.headline || "Error generating headline.",
        description: result.description || "Error generating description.",
        image: result.image || "https://via.placeholder.com/600x400.png?text=Error+Fetching+Image",
      });

      setLoading(false);
    };

    fetchWebsiteContent();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <div className="p-6 flex flex-col items-center">
          {loading ? (
            <h1 className="text-xl font-bold">Generating Content...</h1>
          ) : data ? (
            <>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-lg font-semibold text-gray-700">{data.headline}</p>
              <p className="mt-2 text-gray-500">{data.description}</p>
              <img src={data.image} alt={id} className="mt-4 w-full max-w-md rounded-lg shadow" />
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
  );
}
