import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { ViewHeadline } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={1000} />;
});

export default function DrawerCopy2() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          border: 'none', // Remove border
          minWidth: 0,
          padding: 0,
        }}
      >
        <ViewHeadline sx={{ color: 'black' }} /> {/* Black icon */}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div
          style={{ color: 'black', margin: '13px', marginLeft: '5%', marginTop: '6%', fontSize: '26px' }}
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={handleClose} component={Link} to={item.link}>
                <ListItemIcon sx={{ color: "rgb(93, 136, 186)", display: 'flex', flexDirection: 'row-reverse', marginRight: '50px' }}>
                  <ListItemText>
                    <div style={{ fontSize: '30px', color: 'black', textAlign: 'right', marginLeft: '50px', padding: 0 }}>
                      {item.text}
                    </div>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
