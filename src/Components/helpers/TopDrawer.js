import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { ViewHeadline } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={1000} />;
});

const TopDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleClose();
  };

  const menuItems = [
    { text: "בית", link: "/" },
    { text: "עבודות", link: "/works" },
    { text: "עלי", link: "/about" },
    { text: "יצירת קשר", link: "/contact" },
  ];

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          border: "none",
          minWidth: 0,
          padding: 0,
        }}
      >
        <ViewHeadline sx={{ color: "#C0D3CAFF" }} />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "#C0D3CAFF",
            backdropFilter: "blur(5px)",
          },
        }}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <div
          style={{
            color: "#C0D3CAFF",
            margin: "13px",
            marginLeft: "auto",
            marginRight: "5%",
            marginTop: "6%",
            fontSize: "26px",
            cursor: "pointer",
          }}
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </div>

        <List sx={{ width: "100%" }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={handleMenuClick}
                component={Link}
                to={item.link}
              >
                <ListItemText>
                  <div
                    style={{
                      fontSize: "30px",
                      color: "#C0D3CAFF",
                      textAlign: "right",
                      padding: 0,
                      marginRight: "5%",
                    }}
                  >
                    {item.text}
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default TopDrawer;
