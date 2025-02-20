"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PersonalizedPage() {
  const [platform, setPlatform] = useState("Google");
  const [product, setProduct] = useState("AI Marketing Tool");
  const [data, setData] = useState<{ title: string; headline: string; description: string; image: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWebsiteContent = async () => {
    setLoading(true);
    const response = await fetch("/api/website-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform, product }),
    });
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Generate AI Website Content</h1>

          <div className="flex gap-2 w-full">
            <Input placeholder="Platform (e.g., Google)" value={platform} onChange={(e) => setPlatform(e.target.value)} />
            <Input placeholder="Product (e.g., AI Tool)" value={product} onChange={(e) => setProduct(e.target.value)} />
          </div>

          <Button className="mt-4 w-full" onClick={fetchWebsiteContent} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>

          {data && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold">{data.title}</h2>
              <p className="text-gray-600">{data.headline}</p>
              <p className="mt-2 text-gray-500">{data.description}</p>
              <img src={data.image} alt="Generated" className="mt-4 w-full max-w-md rounded-lg shadow" />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
