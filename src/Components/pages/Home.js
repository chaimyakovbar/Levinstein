import React from "react";
import Contact from "./Contact";
import Works from "./Works";
import HeroImages from "../helpers/HeroImages";
import AboutSection from "../helpers/AboutSection";
import SocialNetworks from "../helpers/SocialNetworks";

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1a1a', // Subtle black background
      textAlign: 'center', // סידור התוכן במרכז
      color: '#f5f5f5', // Soft white color for text
      minHeight: '100vh', // Ensure full viewport height
    },
    contentWrapper: {
      width: '100%',
      maxWidth: '1200px',
      margin: 'auto',
    },
    sectionWrapper: {
      marginBottom: '40px',
    },
  };

  return (
    <div style={styles.container}>
      <HeroImages />
      <div style={styles.sectionWrapper}>
        <Works />
      </div>
      <AboutSection />
      <Contact />
      <SocialNetworks />
    </div>
  );
};

export default Home;
