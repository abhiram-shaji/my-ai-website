import ads from "@/data/ads.json";

export type Ad = {
  id: string;
  platform: string;
  headline: string;
  description: string;
  image: string;
  url: string;
};

/**
 * Processes raw ad data and structures it into a consistent format.
 * Ensures all ads have proper values and fallback defaults.
 */
export function getStructuredAds(): Ad[] {
  return ads.map((ad) => ({
    id: ad.id || "N/A",
    platform: ad.platform || "Unknown",
    headline: ad.headline.trim() || "No Headline Available",
    description: ad.description.trim() || "No Description Available",
    image: ad.image || "https://via.placeholder.com/300",
    url: ad.url || "#",
  }));
}

/**
 * Fetches a single ad by ID and returns structured data.
 */
export function getAdById(id: string): Ad | null {
  const ad = ads.find((ad) => ad.id === id);
  return ad ? getStructuredAds().find((a) => a.id === id) || null : null;
}
