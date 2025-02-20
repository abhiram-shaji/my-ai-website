"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PersonalizedPage() {
  const [platform, setPlatform] = useState("Google");
  const [product, setProduct] = useState("AI Marketing Tool");
  const router = useRouter(); // ✅ Initialize Next.js router

  // ✅ Function to navigate to the dynamic page using user input
  const handleGenerate = () => {
    if (!product.trim()) return; // Prevent empty product input
    const encodedProduct = encodeURIComponent(product); // Encode URL properly
    router.push(`/personalized/${encodedProduct}`); // Redirect user
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Generate AI Website Content</h1>

          <div className="flex gap-2 w-full">
            <Input
              placeholder="Platform (e.g., Google)"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
            <Input
              placeholder="Product (e.g., AI Tool)"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>

          {/* ✅ Redirect to Dynamic Page */}
          <Button className="mt-4 w-full" onClick={handleGenerate}>
            Generate
          </Button>
        </div>
      </Card>
    </div>
  );
}
