import React from "react";
import { Link } from "react-router-dom";
import TopDrawer from "./TopDrawer";

const NavBar = () => {
  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#1a1a1a",
      padding: "10px 20px",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
      borderBottom: "1px solid #444",
    },
    logo: {
      textDecoration: "none",
      color: "#FFD700",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    brandName: {
      textDecoration: "none",
      color: "#E8F3EEFF",
      fontSize: "28px",
      fontWeight: "600",
      fontFamily: "'Cormorant Garamond', serif",
      textShadow: "2px 2px 8px rgba(232, 243, 238, 0.6)",
      letterSpacing: "2px",
      transition: "all 0.3s ease",
      animation: "wave 2s ease-in-out infinite",
      "&:hover": {
        color: "#FFFFFF",
        textShadow: "2px 2px 12px rgba(255, 255, 255, 0.8)",
        transform: "scale(1.02)",
      },
    },

    "@keyframes wave": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-5px)",
      },
    },

    drawerContainer: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "#C0D3CAFF",
      fontFamily: "'Roboto', sans-serif",
      marginLeft: "15px",
    },
  };

  return (
    <div style={styles.navContainer}>
      <Link
        to="/"
        style={{
          ...styles.brandName,
          animation: "wave 3s ease-in-out infinite",
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        Netanel Photography
      </Link>
      <div style={{ position: "absolute", right: 20 }}>
        <TopDrawer />
      </div>
    </div>
  );
};

export default NavBar;
