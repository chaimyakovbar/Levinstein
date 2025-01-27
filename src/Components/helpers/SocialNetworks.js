import React from "react";
import { Instagram, LocalPhone, WhatsApp, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";

export const socialItems = [
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/myisraeliview?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    text: "my Israeli View",
  },
  {
    icon: <LocalPhone />,
    link: "tel:054-800-5704",
    text: "054-800-5704",
  },
  {
    icon: <WhatsApp />,
    link: "https://api.whatsapp.com/send?phone=972548005704&text=אני+מעוניין+בצלם++",
    text: "054-800-5704",
  },
  {
    icon: <Mail />,
    link: "mailto:8005704@gmail.com",
    text: "8005704@gmail.com",
  },
];

const SocialNetworks = () => {
  const styles = {
    container: {
      background:
        "linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(38, 38, 38, 0.9))",
      color: "#ffffff",
      padding: "30px",
      borderRadius: "20px",
      width: "85%",
      margin: "40px auto",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    list: {
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row",
      },
      gap: "20px",
      justifyContent: "space-between",
      flexWrap: {
        xs: "wrap",
        md: "nowrap",
      },
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      padding: "12px 20px",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      background: "rgba(255, 255, 255, 0.05)",
      flex: {
        xs: "1 1 100%",
        md: "1",
      },
      minWidth: {
        md: "0",
      },
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
        transform: "translateY(-2px)",
      },
    },
    icon: {
      color: "#ffffff",
      marginRight: "15px",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.1) rotate(5deg)",
      },
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "500",
      letterSpacing: "0.5px",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      width: "100%",
      "&:hover": {
        color: "#f0f0f0",
        transform: "translateX(5px)",
      },
    },
    footer: {
      marginTop: "40px",
      padding: "20px 0 0",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    },
    footerLink: {
      display: "inline-block",
      padding: "8px 16px",
      margin: "10px 0",
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "0.9rem",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      cursor: "pointer",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.15)",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      },
      "&:active": {
        transform: "translateY(1px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    footerText: {
      color: "rgba(255, 255, 255, 0.7)",
      fontSize: "0.8rem",
      margin: "15px 0 0",
      lineHeight: "1.5",
    },
    footerStrong: {
      color: "#ffffff",
      fontWeight: "600",
    },
  };

  return (
    <Box sx={styles.container}>
      <List sx={styles.list}>
        {socialItems.map((item, index) => (
          <ListItem key={index} sx={styles.listItem}>
            <a href={item.link} style={styles.link}>
              <ListItemIcon sx={styles.icon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </a>
          </ListItem>
        ))}
      </List>

      <Box sx={styles.footer}>
        <Link
          to="/PolicySupport"
          style={styles.footerLink}
          onClick={() => window.scrollTo(0, 0)}
        >
          Policy Support
        </Link>
        <p style={styles.footerText}>
          All Rights reserved © 2024 Showroom By Netanel Photography
          <br />
          <strong style={styles.footerStrong}>Created by McdWebs</strong>
        </p>
      </Box>
    </Box>
  );
};

export default SocialNetworks;
