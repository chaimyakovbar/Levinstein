import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { IMAGE_LIST } from "../../consts/SubjectsList";
import DialogForImage from "./Dialog";

const CollectionPage = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const { label } = useParams();
  const navigate = useNavigate();
  const collection = IMAGE_LIST.find((item) => item.label === label);

  const styles = {
    container: {
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      padding: '60px 20px',
      color: '#f5f5f5',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '40px',
      maxWidth: '1200px',
      margin: '0 auto 40px',
    },
    backButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#f5f5f5',
      borderRadius: '50%',
      minWidth: '40px',
      width: '40px',
      height: '40px',
      padding: '8px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
    title: {
      fontSize: '2rem',
      fontWeight: '500',
    },
    galleryContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      padding: '0 20px',
    },
    imageWrapper: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      aspectRatio: '1',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
      },
      '&:hover img': {
        transform: 'scale(1.1)',
      },
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    overlayText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  };

  if (!collection) {
    return <Box sx={styles.container}>Collection not found.</Box>;
  }

  const filteredImages = IMAGE_LIST.filter(
    (image) => image.label === collection.label
  );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Button
          sx={styles.backButton}
          onClick={() => navigate("/works")}
        >
          <ArrowBack />
        </Button>
        <Typography sx={styles.title}>
          {collection.label}
        </Typography>
      </Box>

      <Box sx={styles.galleryContainer}>
        {filteredImages.map((image, index) => (
          <Box
            key={index}
            sx={styles.imageWrapper}
            onClick={() => setSelectedImages(image)}
          >
            <img
              src={image.image}
              alt={image.label}
              style={styles.image}
            />
          </Box>
        ))}
      </Box>
      {selectedImages && (
        <DialogForImage
          open={!!selectedImages}
          onClose={() => setSelectedImages(null)}
          image={selectedImages}
          allImages={filteredImages}
        />
      )}
    </Box>
  );
};

export default CollectionPage;
