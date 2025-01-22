import React from "react";
import { Instagram, LocalPhone, WhatsApp, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

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
  return (
    <div>
      <List>
        {socialItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon sx={{ color: "rgb(93, 136, 186)" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <a href={item.link}>
                {item.text}
              </a>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Link to={"/PolicySupport"}>
        Policy Support
      </Link>
      <Link to="/">
        <button>
          <p>
            All Rights reserved © 2024 Showroom By Netanel Photography -
            <strong>Created by McdWebs</strong>
          </p>
        </button>
      </Link>
    </div>
  );
};

export default SocialNetworks;
