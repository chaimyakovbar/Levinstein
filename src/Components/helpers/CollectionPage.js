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
import useImageDimensions from "../../hooks/useImageDimensions";
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

  const imageUrls = images.map((image) => image.image);
  const { dimensions: imageDimensions, loading: imageDimensionsLoading } =
    useImageDimensions(imageUrls);

  // Initial load
  useEffect(() => {
    setImages(initialImages.slice(0, IMAGES_PER_BATCH));
    setCurrentBatchIndex(0);
    setAllLoaded(false);
  }, [label, initialImages]);

  // Load next batch
  useEffect(() => {
    const loadNextBatch = async () => {
      if (loading || allLoaded || !isNearBottom) return;

      try {
        setLoading(true);
        const batch = REMAINING_BATCHES[currentBatchIndex];

        if (batch) {
          const matchingImages = batch.filter((img) => img.label === label);

          if (matchingImages.length > 0) {
            await new Promise((resolve) => setTimeout(resolve, 300));
            setImages((prevImages) => [...prevImages, ...matchingImages]);
          }
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

  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      minHeight: "100vh",
      padding: "20px",
      color: "#f5f5f5",
      width: "100%",
      boxSizing: "border-box",
      overflowX: "hidden",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "20px",
      padding: "0 20px",
      width: "100%",
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
      fontSize: {
        xs: "1.5rem",
        sm: "2rem",
      },
      fontWeight: "500",
    },
    galleryContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(auto-fill, minmax(150px, 1fr))",
        sm: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      gap: {
        xs: "5px",
        sm: "10px",
      },
      padding: {
        xs: "0 10px",
        sm: "0 20px",
      },
      gridAutoRows: {
        xs: "150px",
        sm: "250px",
      },
    },
    imageContainer: {
      position: "relative",
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
        {images.map((image, index) => {
          const { width, height } = imageDimensions[index] || {};
          const aspectRatio = width / height;

          let spanConfig = {};
          if (aspectRatio > 1.5) {
            // Very wide images
            spanConfig = {
              gridColumn: "span 2",
              gridRow: "span 1",
            };
          } else if (aspectRatio < 0.9) {
            // Very tall images
            spanConfig = {
              gridColumn: "span 1",
              gridRow: "span 2",
            };
          } else {
            // Normal aspect ratio images
            spanConfig = {
              gridColumn: "span 1",
              gridRow: "span 1",
            };
          }

          const imageStyle = {
            ...styles.imageContainer,
            ...spanConfig,
          };

          return (
            <Box
              key={index}
              className="collection-image"
              sx={imageStyle}
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
          );
        })}

        {imageDimensionsLoading && (
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
