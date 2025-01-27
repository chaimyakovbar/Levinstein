import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import { IMAGE_LIST, REMAINING_BATCHES } from "../../consts/SubjectsList";
import DialogForImage from "./Dialog";
import useImageLoading from "../../hooks/useImageLoading";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "react-lazy-load-image-component/src/effects/blur.css";

const IMAGES_PER_BATCH = 12;

const CollectionPage = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [images, setImages] = useState([]);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const isNearBottom = useInfiniteScroll();

  const { label } = useParams();
  const navigate = useNavigate();
  const { imageWrapperStyle } = useImageLoading("collection-image");

  const initialImages = useMemo(
    () => IMAGE_LIST.filter((item) => item.label === label),
    [label]
  );

  useEffect(() => {
    const loadNextBatch = async () => {
      if (loading || allLoaded || !isNearBottom) return;

      try {
        setLoading(true);
        const remainingBatches = REMAINING_BATCHES.slice(currentBatchIndex);
        const nextImages = remainingBatches
          .flat()
          .filter((img) => img.label === label)
          .slice(0, IMAGES_PER_BATCH);

        if (nextImages.length > 0) {
          await new Promise((resolve) => setTimeout(resolve, 300));
          setImages((prevImages) => [...prevImages, ...nextImages]);
          setCurrentBatchIndex((prev) => prev + 1);
        } else {
          setAllLoaded(true);
        }
      } catch (error) {
        console.error("Error in loadNextBatch:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNextBatch();
  }, [isNearBottom, currentBatchIndex, loading, allLoaded, label]);

  // Initial load
  useEffect(() => {
    setImages(initialImages.slice(0, IMAGES_PER_BATCH));
    setCurrentBatchIndex(0);
    setAllLoaded(false);
  }, [label, initialImages]);

  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      minHeight: "100vh",
      padding: "60px 20px",
      color: "#f5f5f5",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "40px",
      maxWidth: "1200px",
      margin: "0 auto 40px",
    },
    backButton: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#f5f5f5",
      borderRadius: "50%",
      minWidth: "40px",
      width: "40px",
      height: "40px",
      padding: "8px",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
    title: {
      fontSize: "2rem",
      fontWeight: "500",
    },
    galleryContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "0 20px",
    },
    imageContainer: {
      position: "relative",
      aspectRatio: "4/3",
      borderRadius: "12px",
      overflow: "hidden",
      cursor: "pointer",
      backgroundColor: "#2a2a2a",
      ...imageWrapperStyle,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      width: "100%",
      gridColumn: "1 / -1",
    },
    endMessage: {
      textAlign: "center",
      padding: "20px",
      color: "#f5f5f5",
      width: "100%",
      gridColumn: "1 / -1",
    },
  };

  if (!initialImages.length) {
    return <Box sx={styles.container}>Collection not found.</Box>;
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Button sx={styles.backButton} onClick={() => navigate("/")}>
          <ArrowBack />
        </Button>
        <Typography sx={styles.title}>{label}</Typography>
      </Box>

      <Box sx={styles.galleryContainer}>
        {images.map((image, index) => (
          <Box
            key={index}
            className="collection-image"
            sx={styles.imageContainer}
            onClick={() => setSelectedImages(image)}
          >
            <LazyLoadImage
              src={image.image}
              alt={image.label}
              width="100%"
              height="100%"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              }
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>
        ))}

        {loading && (
          <Box sx={styles.loadingContainer}>
            <CircularProgress size={40} sx={{ color: "#f5f5f5" }} />
          </Box>
        )}
      </Box>

      {selectedImages && (
        <DialogForImage
          open={!!selectedImages}
          onClose={() => setSelectedImages(null)}
          image={selectedImages}
          allImages={images}
        />
      )}
    </Box>
  );
};

export default CollectionPage;
