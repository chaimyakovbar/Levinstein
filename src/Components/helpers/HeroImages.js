import React, { useState, useEffect } from "react";
import { CAROUSEL_LIST } from "../../consts/SubjectsList";

const HeroImages = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_LIST.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % CAROUSEL_LIST.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? CAROUSEL_LIST.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.app}>
      <div style={styles.imageContainer}>
        <button
          onClick={prevSlide}
          style={{ ...styles.button, left: "20px" }}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <img
          src={CAROUSEL_LIST[currentImage].image}
          alt={CAROUSEL_LIST[currentImage].title}
          style={styles.image}
        />

        <button
          onClick={nextSlide}
          style={{ ...styles.button, right: "20px" }}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        <div style={styles.indicators}>
          {CAROUSEL_LIST.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                backgroundColor: currentImage === index ? "#fff" : "#666",
              }}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    width: "100%",
    backgroundColor: "rgb(26, 26, 26)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "80vh",
    maxHeight: "800px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    backgroundColor: "rgb(26, 26, 26)",
    padding: "20px",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#C0D3CAFF",
    border: "none",
    padding: "20px",
    cursor: "pointer",
    fontSize: "24px",
    borderRadius: "50%",
    zIndex: 1,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  },
  indicators: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default HeroImages;
