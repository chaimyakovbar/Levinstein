import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { IMAGE_LIST } from "../../consts/SubjectsList";
import DialogForImage from "./Dialog";

const CollectionPage = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [imageLayouts, setImageLayouts] = useState([]);
  const { label } = useParams();
  const navigate = useNavigate();
  const collection = IMAGE_LIST.find((item) => item.label === label);

  const styles = {
    container: {
      backgroundColor: "#0a0a0a",
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
      gridAutoFlow: "dense", // מבטיח שהתמונות יתמלאו ללא חורים
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // פריסה גמישה
      gap: "8px", // רווח קטן יותר בין התמונות
      padding: "0 20px",
    },
    
    
    imageWrapper: {
      overflow: "hidden",
      borderRadius: "12px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  useEffect(() => {
    const loadImageLayouts = async () => {
      if (!collection) return;
      const layouts = await Promise.all(
        IMAGE_LIST.filter((item) => item.label === collection.label).map(
          async (image) => {
            const layout = await calculateImageLayout(image.image);
            return { ...image, ...layout }; // שמור cols ו-rows
          }
        )
      );
      setImageLayouts(layouts);
    };

    loadImageLayouts();
  }, [collection]);

  if (!collection) {
    return <Box sx={styles.container}>Collection not found.</Box>;
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Button sx={styles.backButton} onClick={() => navigate("/")}>
          <ArrowBack />
        </Button>
        <Typography sx={styles.title}>{collection.label}</Typography>
      </Box>

      <Box sx={styles.galleryContainer}>
        {imageLayouts.map((image, index) => (
          <Box
            key={index}
            sx={{
              gridColumn: `span ${image.cols}`,
              gridRow: `span ${image.rows}`,
              ...styles.imageWrapper,
            }}
            onClick={() => setSelectedImages(image)}
          >
            <img src={image.image} alt={image.label} style={styles.image} />
          </Box>
        ))}
      </Box>
      {selectedImages && (
        <DialogForImage
          open={!!selectedImages}
          onClose={() => setSelectedImages(null)}
          image={selectedImages}
          allImages={imageLayouts}
        />
      )}
    </Box>
  );
};

export default CollectionPage;

// פונקציה לחישוב הפריסה
function calculateImageLayout(imageSrc) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      if (img.width > img.height) {
        resolve({ cols: 2, rows: 1 }); // תמונה לרוחב
      } else {
        resolve({ cols: 1, rows: 2 }); // תמונה לאורך
      }
    };
  });
}
