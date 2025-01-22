import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HeroImages from "../helpers/HeroImages";
import SocialNetworks from "../helpers/SocialNetworks";
import CarouselCollections from "./CarouselCollections";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Contact from "./Contact";
import Description from "../helpers/Description";

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', // רקע לבן כמו של אפל
      // padding: '40px 20px',
      // height: '100vh', // גובה המסך המלא
      textAlign: 'center', // סידור התוכן במרכז
    },
    button: {
      fontSize: '18px',
      backgroundColor: '#007aff', // כחול אפל
      color: '#fff',
      padding: '15px 30px',
      borderRadius: '50px', // פינות מעוגלות
      fontWeight: '600',
      border: 'none',
      textTransform: 'uppercase',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // הצללה עדינה
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0051a8', // כחול כהה יותר בזמן hover
      transform: 'scale(1.05)', // הגדלה קלה של כפתור
    },
    buttonText: {
      marginLeft: '10px',
    },
    contentWrapper: {
      width: '100%',
      maxWidth: '1200px',
      margin: 'auto',
      // padding: '40px 20px',
    },
    sectionWrapper: {
      // marginBottom: '60px',
    }
  };

  return (
    <div style={styles.container}>
      <HeroImages />
      {/* <Description /> */}
      {/* <CarouselCollections /> */}
      <div style={styles.sectionWrapper}>
        <Button
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007aff'}
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/works")}
        >
          <span style={styles.buttonText}>לגלריית התמונות</span>
        </Button>
      </div>
      <Contact />
      <SocialNetworks />
    </div>
  );
};

export default Home;
