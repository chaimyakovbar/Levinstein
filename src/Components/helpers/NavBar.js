import React from "react";
import { Link } from "react-router-dom";
import DrawerNavBAr from "./Drawer";
import DrawerCopy2 from "./DrawerCopy";

const NavBar = () => {
  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#f8f8f8", // רקע לבן-אפור כמו של Apple
      padding: "10px 20px",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // הצללה עדינה
      borderBottom: "1px solid #e0e0e0", // קו תחתון דק
    },
    logo: {
      textDecoration: "none",
      color: "#333", // צבע טקסט אפור כהה
      fontFamily: "'Helvetica Neue', Arial, sans-serif", // גופן נקי
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    brandName: {
      textDecoration: "none",
      color: "black", // כחול Apple
      fontFamily: "'San Francisco', 'Roboto', sans-serif",
      fontSize: "24px",
      fontWeight: "500",
    },
    drawerContainer: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.navContainer}>
      {/* <Link to="/" >
        <button style={{ border: "none", background: "none", cursor: "pointer", }} >
          לוגו כאן אם יש
        </button>
      </Link>
       */}
        <button style={{ border: "none", background: "none", cursor: "pointer", }} >
          אנגלית/עיברית 
          <br/>
          מצב לילה/יום
        </button>
      <Link to="/" style={styles.brandName}>
        Netanel Photography
      </Link>
      <div style={styles.drawerContainer}>
        בחירה איזה סור של drawer
        {/* <DrawerNavBAr /> */}
        <DrawerCopy2 />
      </div>
    </div>
  );
};

export default NavBar;
