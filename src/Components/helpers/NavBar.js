import React from "react";
import { Link } from "react-router-dom";
import Drawer2 from "./Drawer2";

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
      color: "white",
      fontFamily: "'San Francisco', 'Roboto', sans-serif",
      fontSize: "24px",
      fontWeight: "500",
      textShadow: "2px 2px 5px #FFD700",
    },

    drawerContainer: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "white",
      fontFamily: "'Roboto', sans-serif",
      marginLeft: "15px",
    },
  };

  return (
    <div style={styles.navContainer}>
      <Link to="/" style={styles.brandName}>
        Netanel Photography
      </Link>
      <div style={{ position: 'absolute', right: 20 }}>
        <Drawer2 />
      </div>
    </div>
  );
};

export default NavBar;
