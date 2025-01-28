import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COLLECTION_LIST } from "../../consts/SubjectsList";
import useImageLoading from "../../hooks/useImageLoading";

const Works = () => {
  const navigate = useNavigate();
  const { imageWrapperStyle } = useImageLoading("image-wrapper");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    galleryContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "center",
      width: "100%",
    },
    imageWrapper: {
      width: "350px", // Smaller fixed width
      aspectRatio: "1/1.2",
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      ...imageWrapperStyle,
    },
    image: {
      width: "100%",
      height: "85%",
      objectFit: "cover",
      borderRadius: "200px 200px 0 0", // Inverted arch shape
      backgroundColor: "transparent", // Remove #C0D3CAFF background
    },
    label: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "#2c3a33",
      color: "#c5b9a5",
      textAlign: "center",
      height: "15%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    number: {
      position: "absolute",
      top: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#2c3a33",
      padding: "0 10px",
      fontSize: "32px",
      fontFamily: "Cormorant Garamond, serif",
      color: "#c5b9a5",
      borderRadius: "50%",
    },
    labelText: {
      fontSize: "18px",
      textTransform: "uppercase",
      letterSpacing: "3px",
      color: "#c5b9a5",
      marginTop: "5px",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      margin: "40px 0",
      color: "#C0D3CAFF",
      fontFamily: "Cormorant Garamond, serif",
      textTransform: "uppercase",
    },
  };

  const validCollectionItems = COLLECTION_LIST.filter(
    (item) => item && item.image && item.label
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>גלריית התמונות</h1>
      <div style={styles.galleryContainer}>
        {validCollectionItems.map((image, index) => (
          <div
            key={image.id}
            className="image-wrapper"
            style={styles.imageWrapper}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate(`/collections/${image.label}`);
            }}
          >
            <img src={image.image} alt={image.label} style={styles.image} />
            <div style={styles.label}>
              <div style={styles.number}>{`0${index + 1}`}</div>
              <div style={styles.labelText}>{image.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
