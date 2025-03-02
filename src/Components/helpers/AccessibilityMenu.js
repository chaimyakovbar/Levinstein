import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CloseIcon from "@mui/icons-material/Close";

// Constants
const INITIAL_SETTINGS = {
  fontSize: 16,
  highContrast: false,
  invertedContrast: false,
  grayscale: false,
  highlightLinks: false,
};

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 24;
const BASE_FONT_SIZE = 16;

const AccessibilityMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState(INITIAL_SETTINGS);

  // Load saved settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, []);

  // Save settings when they change
  useEffect(() => {
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (currentSettings) => {
    // Update to use rem units for better scaling
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // Set base font size on HTML element (1rem = 16px by default)
    htmlElement.style.fontSize = `${currentSettings.fontSize}px`;

    // Apply to both body and main content container if it exists
    bodyElement.style.fontSize = "1rem";
    const mainContent = document.getElementById("root"); // or your main content wrapper
    if (mainContent) {
      mainContent.style.fontSize = "1rem";
    }

    // Apply contrast settings
    document.body.style.backgroundColor = currentSettings.highContrast
      ? "#000"
      : "#1a1a1a";
    document.body.style.color = currentSettings.highContrast ? "#fff" : "#000";

    // Apply filters
    const filters = [];
    if (currentSettings.invertedContrast) filters.push("invert(100%)");
    if (currentSettings.grayscale) filters.push("grayscale(100%)");
    document.body.style.filter = filters.length ? filters.join(" ") : "none";

    // Apply link highlighting
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.textDecoration = currentSettings.highlightLinks
        ? "underline"
        : "none";
      link.style.color = currentSettings.highlightLinks ? "yellow" : "inherit";
    });
  };

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const adjustFontSize = (increment) => {
    setSettings((prev) => {
      const newSize = Math.min(
        MAX_FONT_SIZE,
        Math.max(MIN_FONT_SIZE, prev.fontSize + increment)
      );
      return {
        ...prev,
        fontSize: newSize,
      };
    });
  };

  const resetSettings = () => {
    setSettings(INITIAL_SETTINGS);
  };

  return (
    <MenuContainer>
      <Tooltip title="תפריט נגישות" placement="left">
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="תפריט נגישות"
        >
          {isMenuOpen ? <CloseIcon /> : <AccessibilityNewIcon />}
        </MenuButton>
      </Tooltip>

      {isMenuOpen && (
        <MenuOptions role="menu">
          <MenuOption>
            <OptionLabel>גודל הכתב</OptionLabel>
            <ButtonGroup>
              <Tooltip title="הגדל גודל גופן">
                <IconButton
                  onClick={() => adjustFontSize(2)}
                  disabled={settings.fontSize >= MAX_FONT_SIZE}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="הקטן גודל גופן">
                <IconButton
                  onClick={() => adjustFontSize(-2)}
                  disabled={settings.fontSize <= MIN_FONT_SIZE}
                >
                  <RemoveIcon />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
          </MenuOption>

          <MenuOption
            onClick={() =>
              updateSetting("highContrast", !settings.highContrast)
            }
            role="menuitem"
          >
            {settings.highContrast
              ? "כבה ניגודיות גבוהה"
              : "הפעל ניגודיות גבוהה"}
          </MenuOption>

          <MenuOption
            onClick={() =>
              updateSetting("invertedContrast", !settings.invertedContrast)
            }
            role="menuitem"
          >
            {settings.invertedContrast
              ? "כבה ניגודיות הפוכה"
              : "הפעל ניגודיות הפוכה"}
          </MenuOption>

          <MenuOption
            onClick={() => updateSetting("grayscale", !settings.grayscale)}
            role="menuitem"
          >
            {settings.grayscale ? "כבה גווני אפור" : "הפעל גווני אפור"}
          </MenuOption>

          <MenuOption
            onClick={() =>
              updateSetting("highlightLinks", !settings.highlightLinks)
            }
            role="menuitem"
          >
            {settings.highlightLinks
              ? "כבה הדגשת קישורים"
              : "הפעל הדגשת קישורים"}
          </MenuOption>

          <ResetButton onClick={resetSettings}>איפוס הגדרות נגישות</ResetButton>
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
  background-color: #2c3a33;
  color: #c0d3ca;
  border: 2px solid #c5b9a5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: #3d4f45;
    transform: translateY(-2px);
    outline: none;
    box-shadow: 0 0 0 2px #c5b9a5;
  }

  svg {
    font-size: 24px;
  }
`;

const MenuOptions = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  background-color: #2c3a33;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid #c5b9a5;
  min-width: 250px;
`;

const MenuOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #c5b9a5;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: #3d4f45;
    color: #d6caba;
  }
`;

const OptionLabel = styled.span`
  margin-right: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #3d4f45;
  color: #c5b9a5;
  border: 1px solid #c5b9a5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4d635a;
    color: #d6caba;
  }
`;
