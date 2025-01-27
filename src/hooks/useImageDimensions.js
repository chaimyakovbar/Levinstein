import { useState, useEffect } from "react";

const useImageDimensions = (imageUrls) => {
  const [dimensions, setDimensions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDimensions = async () => {
      const results = await Promise.all(
        imageUrls.map((url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              resolve({
                width: img.width,
                height: img.height,
                aspectRatio: aspectRatio,
              });
            };
            img.onerror = () => {
              console.error("Error loading image:", url);
              resolve({ width: 0, height: 0, aspectRatio: 1 });
            };
            img.src = url;
          });
        })
      );
      setDimensions(results);
      setLoading(false);
    };

    if (imageUrls.length > 0) {
      fetchDimensions();
    } else {
      setLoading(false);
    }
  }, [imageUrls]);

  return { dimensions, loading };
};

export default useImageDimensions;
