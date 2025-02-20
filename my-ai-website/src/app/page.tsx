"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router for navigation
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [platform, setPlatform] = useState(""); // ✅ User-input platform
  const [product, setProduct] = useState(""); // ✅ User-input product
  const router = useRouter();

  // ✅ Redirects to `/personalized/:platform/:product`
  const handleGenerate = () => {
    if (!platform.trim() || !product.trim()) return; // Prevent empty inputs
    const encodedPlatform = encodeURIComponent(platform);
    const encodedProduct = encodeURIComponent(product);
    router.push(`/personalized/${encodedPlatform}/${encodedProduct}`); // ✅ Navigate to dynamic page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Generate AI Website Content</h1>

          <div className="flex gap-2 w-full">
            <Input
              placeholder="Platform (e.g., Google, Facebook, LinkedIn)"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
            <Input
              placeholder="Product (e.g., AI Marketing Tool)"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>

          <Button className="mt-4 w-full" onClick={handleGenerate}>
            Generate
          </Button>
        </div>
      </Card>
    </div>
  );
}
