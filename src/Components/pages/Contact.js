import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import { socialItems } from "../helpers/SocialNetworks";

const Contact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(26, 26, 26, 0.7)',
      color: '#f5f5f5',
      padding: '30px 20px',
      borderRadius: '12px',
      maxWidth: '400px',
      margin: '0 auto',
    },
    formWrapper: {
      width: '100%',
      maxWidth: '500px',
      margin: 'auto',
    },
    title: {
      marginBottom: '30px',
      fontSize: '2rem',
      fontWeight: '600',
      color: '#f5f5f5',
      textAlign: 'center',
    },
    inputField: {
      marginBottom: '20px',
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        '& fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover fieldset': {
          borderColor: '#FFC107',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FFC107',
        },
      },
      '& .MuiInputLabel-root': {
        color: '#1a1a1a',
        '&.Mui-focused': {
          color: '#1a1a1a',
        }
      },
      '& .MuiOutlinedInput-input': {
        color: '#1a1a1a',
      },
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: '20px',
    },
    submitButton: {
      fontSize: '18px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#1a1a1a',
      borderRadius: '50px',
      fontWeight: '600',
      border: 'none',
      textTransform: 'uppercase',
      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '10px 30px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 15px rgba(255, 255, 255, 0.3)',
        '&::before': {
          transform: 'translateX(100%)',
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
        transition: 'transform 0.6s ease',
      },
      '&:active': {
        transform: 'translateY(1px)',
        boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)',
      }
    },
    successMessage: {
      marginTop: '20px',
      color: '#FFC107',
      fontWeight: '500',
    },
  };

  const clearData = () => {
    setName("");
    setPhone("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in both name and phone.");
      return;
    }

    const data = {
      name,
      phone,
    };

    try {
      // Send WhatsApp message
      const whatsappResponse = await fetch('https://netanel-lewinstein-back.onrender.com/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Send email
      // const emailResponse = await fetch('/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Check for success response
      if (whatsappResponse.ok) {
        setSuccessMessage("הבקשה נשלחה.");
        clearData();
      } else {
        throw new Error("Failed to send messages");
      }
    } catch (error) {
      console.error("Failed to send messages:", error);
      setSuccessMessage("ארעה שגיאה , אנא נסה שנית מאוחר יותר");
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formWrapper}>
        <Typography sx={styles.title} variant="h5" >
          נשמח לשמוע מכם
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={styles.inputField}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              label="שם מלא"
              variant="outlined"
            />
          </Box>
          <Box sx={styles.inputField}>
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              label="מספר טלפון"
              variant="outlined"
              type="text"
            />
          </Box>
          <Box sx={styles.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              sx={styles.submitButton}
            >
              שליחה
            </Button>
          </Box>
          {successMessage && (
            <Typography sx={styles.successMessage}>{successMessage}</Typography>
          )}
        </form>
      </Box>
      {!isHomePage && (
        <>
          <Box marginBottom={15} />
          <Box display="flex" flexDirection="row">
            {socialItems.map((item, index) => (
              <ListItem  key={index}>
                <a href={item.link}>
                  <ListItemIcon sx={{ color: "rgb(93, 136, 186)" }}>
                    {item.icon}
                  </ListItemIcon>
                </a>
              </ListItem>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Contact;
