import React from "react";
import Contact from "./Contact";
import Works from "./Works";
import AboutSection from "../helpers/AboutSection";
import SocialNetworks from "../helpers/SocialNetworks";
import CarouselCollections from "./CarouselCollections";
// import WaveDivider from "../helpers/WaveDivider";

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
      width: "100%",
      // backgroundColor: "#4A2B20",
    },
    sectionWrapper: {
      marginBottom: "40px",
    },
  };

  return (
    <div style={styles.container}>
      <CarouselCollections />
      {/* <WaveDivider topColor="#1a1a1a" bottomColor="#4A2B20" /> */}
      <div style={styles.contentWrapper}>
        <AboutSection />
        <div style={styles.sectionWrapper}>
          <Works />
        </div>
        <Contact />
        <SocialNetworks />
      </div>
    </div>
  );
};

export default Home;
