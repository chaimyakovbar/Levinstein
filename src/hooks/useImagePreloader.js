import { useEffect, useState } from "react";
import { IMAGE_LIST, REMAINING_BATCHES } from "../consts/SubjectsList";

const useImagePreloader = () => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let totalImages = IMAGE_LIST.length;
    REMAINING_BATCHES.forEach((batch) => {
      totalImages += batch.length;
    });

    let loadedImages = 0;

    const updateProgress = () => {
      loadedImages++;
      const currentProgress = (loadedImages / totalImages) * 100;
      setProgress(currentProgress);
    };

    const loadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          updateProgress();
          resolve();
        };
        img.onerror = () => {
          updateProgress();
          resolve();
        };
      });
    };

    const loadBatch = async (batch) => {
      const imageUrls = batch.map((item) => item.image);
      await Promise.all(imageUrls.map((url) => loadImage(url)));
    };

    const loadAllBatches = async () => {
      // Load initial batch
      await loadBatch(IMAGE_LIST);

      // Load remaining batches sequentially
      for (const batch of REMAINING_BATCHES) {
        await loadBatch(batch);
      }

      setImagesPreloaded(true);
    };

    loadAllBatches();

    // Fallback timeout
    const timeoutId = setTimeout(() => {
      setImagesPreloaded(true);
    }, 10000); // Increased timeout for all batches

    return () => clearTimeout(timeoutId);
  }, []);

  return { imagesPreloaded, progress };
};

export default useImagePreloader;
