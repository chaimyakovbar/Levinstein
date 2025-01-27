import React from "react";
import Contact from "./Contact";
import Works from "./Works";
import HeroImages from "../helpers/HeroImages";
import AboutSection from "../helpers/AboutSection";
import SocialNetworks from "../helpers/SocialNetworks";
import CarouselCollections from "./CarouselCollections";

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1a1a1a",
      textAlign: "center",
      color: "#f5f5f5",
      minHeight: "100vh",
    },
    contentWrapper: {
      width: "100wh",
    },
    sectionWrapper: {
      marginBottom: "40px",
    },
  };

  return (
    <div style={styles.container}>
      <HeroImages />
      <AboutSection />
      <CarouselCollections />
      <div style={styles.sectionWrapper}>
        <Works />
      </div>
      <Contact />
      <SocialNetworks />
    </div>
  );
};

export default Home;
