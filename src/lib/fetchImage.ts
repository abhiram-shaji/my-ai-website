/**
 * Fetches a random PNG/JPG image URL from Pexels based on the given topic.
 */
export async function fetchRandomImage(topic: string): Promise<string> {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(topic)}&per_page=1`, {
        headers: { Authorization: process.env.PEXELS_API_KEY! },
      });
  
      const data = await response.json();
      const imageUrl = data.photos?.[0]?.src?.large || data.photos?.[0]?.src?.original;
  
      return imageUrl || "https://via.placeholder.com/600x400.png?text=No+Image+Found";
    } catch (error) {
      console.error("Error fetching image from Pexels:", error);
      return "https://via.placeholder.com/600x400.png?text=Error+Fetching+Image";
    }
  }
  