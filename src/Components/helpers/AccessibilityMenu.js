import React, { useState } from "react";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import TextFormatIcon from "@mui/icons-material/TextFormat";

const AccessibilityMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontStyle, setFontStyle] = useState("Arial");
  const [highContrast, setHighContrast] = useState(false);
  const [invertedContrast, setInvertedContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
    document.body.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize((prevSize) => prevSize - 2);
      document.body.style.fontSize = `${fontSize - 2}px`;
    }
  };

  const changeFontStyle = () => {
    const nextStyle = fontStyle === "Arial" ? "Times New Roman" : "Arial";
    setFontStyle(nextStyle);
    document.body.style.fontFamily = nextStyle;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.style.backgroundColor = highContrast ? "#fff" : "#000";
    document.body.style.color = highContrast ? "#000" : "#fff";
  };

  const toggleInvertedContrast = () => {
    setInvertedContrast(!invertedContrast);
    document.body.style.filter = invertedContrast ? "none" : "invert(100%)";
  };

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    document.body.style.filter = grayscale ? "none" : "grayscale(100%)";
  };

  const resetSettings = () => {
    setFontSize(16);
    setFontStyle("Arial");
    setHighContrast(false);
    setInvertedContrast(false);
    setGrayscale(false);
    document.body.style.fontSize = "16px";
    document.body.style.fontFamily = "Arial";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    document.body.style.filter = "none";
  };

  const toggleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.textDecoration = highlightLinks ? "none" : "underline";
      link.style.color = highlightLinks ? "inherit" : "yellow";
    });
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>
        <AccessibilityNewIcon style={{ color: "white" }} />
        {isMenuOpen}
      </MenuButton>

      {isMenuOpen && (
        <MenuOptions>
          <MenuOption onClick={changeFontStyle}>
            <TextFormatIcon /> שינוי סגנון כתב ({fontStyle})
          </MenuOption>
          <MenuOption>
            <IconButton onClick={increaseFontSize}>
              <AddIcon />{" "}
              <p style={{ fontSize: "20px", marginLeft: "13px" }}>גודל הכתב</p>
            </IconButton>
            <IconButton onClick={decreaseFontSize}>
              <RemoveIcon />
            </IconButton>
          </MenuOption>
          <MenuOption onClick={toggleContrast}>
            {highContrast ? "כבה ניגודיות גבוהה" : "הפעל ניגודיות גבוהה"}
          </MenuOption>
          <MenuOption onClick={toggleInvertedContrast}>
            {invertedContrast ? "כבה ניגודיות הפוכה" : "הפעל ניגודיות הפוכה"}
          </MenuOption>
          <MenuOption onClick={toggleGrayscale}>
            {grayscale ? "כבה גווני אפור" : "הפעל גווני אפור"}
          </MenuOption>
          <MenuOption onClick={toggleHighlightLinks}>
            {highlightLinks ? "כבה הדגשת קישורים" : "הפעל הדגשת קישורים"}
          </MenuOption>
          <MenuOption onClick={resetSettings}>איפוס הגדרות נגישות</MenuOption>
        </MenuOptions>
      )}
    </MenuContainer>
  );
};

export default AccessibilityMenu;

// Styled Components
const MenuContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 1000;
`;

const MenuButton = styled.button`
  background-color: rgb(93, 136, 186);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuOptions = styled.div`
  margin-top: 10px;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const MenuOption = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 16px;
  cursor: pointer;
`;
