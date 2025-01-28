import React from "react";
import Slider from "react-slick";
import { CAROUSEL_LIST } from "../../consts/SubjectsList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import useImagePreloader from "../../hooks/useImagePreloader";

const CarouselCollections = () => {
  const { imagesPreloaded } = useImagePreloader();
  
  const styles = {
    carouselWrapper: {
      width: "100%",
      margin: "2rem auto",
      overflow: "hidden",
      "& .slick-track": {
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      "& .slick-list": {
        overflow: "hidden",
        margin: "0 -5px",
      },
      "& .slick-slide": {
        width: "450px !important",
        padding: "0 5px",
      },
    },
    imageCard: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
      aspectRatio: "16/10",
      width: "100%",
      height: "300px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
  };

  const settings = {
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 12000,
    swipe: false,
    touchMove: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          speed: 12000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          speed: 12000,
        },
      },
    ],
  };

  const extendedCarouselList = [
    ...CAROUSEL_LIST,
    ...CAROUSEL_LIST, // Duplicate items for seamless looping
  ];

  return (
    <Box sx={styles.carouselWrapper}>
      <Slider {...settings}>
        {extendedCarouselList.map((item, index) => (
          <div key={index}>
            <Box sx={styles.imageCard}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={styles.image}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselCollections;
