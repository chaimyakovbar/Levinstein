import { useState, useEffect } from "react";

const useImageDimensions = (imageUrl) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    aspectRatio: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageUrl) {
      setLoading(false);
      return;
    }

    const img = new Image();

    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setDimensions({
        width: img.width,
        height: img.height,
        aspectRatio: aspectRatio,
      });
      setLoading(false);
    };

    img.onerror = () => {
      console.error("Error loading image:", imageUrl);
      setDimensions({ width: 0, height: 0, aspectRatio: 1 });
      setLoading(false);
    };

    img.src = imageUrl;

    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return { ...dimensions, loading };
};

export default useImageDimensions;
