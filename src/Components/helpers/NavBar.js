import React from "react";
import { Link } from "react-router-dom";
import DrawerNavBAr from "./Drawer";
import DrawerCopy2 from "./DrawerCopy";

const NavBar = () => {
  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "black", // רקע שחור
      padding: "10px 20px",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)", // הצללה דקה
      borderBottom: "1px solid #444", // קו תחתון כהה
    },
    logo: {
      textDecoration: "none",
      color: "#FFD700", // צבע זהב
      fontFamily: "'Helvetica Neue', Arial, sans-serif", // גופן נקי
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    brandName: {
      textDecoration: "none",
      color: "white", // צבע הטקסט הראשי
      fontFamily: "'San Francisco', 'Roboto', sans-serif",
      fontSize: "24px",
      fontWeight: "500",
      textShadow: "2px 2px 5px #FFD700", // צל בצבע זהב
    },

    drawerContainer: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "white", // צבע טקסט לבן
      fontFamily: "'Roboto', sans-serif",
      marginLeft: "15px",
    },
  };

  return (
    <div style={styles.navContainer}>
      <Link to="/" style={styles.brandName}>
        Netanel Photography
      </Link>
    </div>
  );
};

export default NavBar;
