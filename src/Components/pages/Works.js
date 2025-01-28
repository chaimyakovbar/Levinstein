import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLLECTION_LIST } from "../../consts/SubjectsList";
import useImageLoading from "../../hooks/useImageLoading";

const Works = () => {
  const navigate = useNavigate();
  const { imageWrapperStyle } = useImageLoading("image-wrapper");

  const [hoveredIndex, setHoveredIndex] = useState(null); // מצב של אינדקס התמונה המועברת עליה העכבר

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    imageWrapper: {
      width: "calc(33.33% - 20px)",
      minWidth: "300px",
      aspectRatio: "4/3",
      position: "relative",
      cursor: "pointer", // הוספת אצבע
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "transform 0.3s ease", // מעבר חלק כשעוברים עם העכבר
      ...imageWrapperStyle,
    },
    image: (isHovered) => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease",
      filter: isHovered ? "blur(5px)" : "blur(0)", // שינוי ה-blur
      opacity: isHovered ? 0.5 : 1, // שינוי ה-opacity
    }),
    label: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "15px",
      background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
      color: "white",
      textAlign: "center",
      fontSize: "24px",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      margin: "40px 0",
      color: "#f5f5f5",
    },
    video: {

    }
  };

  const validCollectionItems = COLLECTION_LIST.filter(
    (item) => item && item.image && item.label
  );

  return (
    <div>
      <h1 style={styles.title}>גלריית התמונות</h1>
      <div style={styles.container}>
        {validCollectionItems.map((image, index) => (
          <div
            key={image.id}
            className="image-wrapper"
            style={styles.imageWrapper}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/collections/${image.label}`);
            }}
            onMouseEnter={() => setHoveredIndex(index)} // בזמן שהעכבר נכנס
            onMouseLeave={() => setHoveredIndex(null)} // בזמן שהעכבר יוצא
          >
            <video style={{ borderRadius: '10px', position: 'absolute', zIndex: 2, width: '60px', }} className={styles.video} autoPlay muted playsInline loop>
              <source style={{ height: '100px' }} src={require('./tap.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              src={image.image}
              alt={image.label}
              style={styles.image(hoveredIndex === index)} // רק התמונה שהעכבר עליה מקבלת את ה-blur
            />
            <div style={styles.label}>{image.label}</div>

          </div>
        ))}
      </div>
    </div >
  );
};

export default Works;
