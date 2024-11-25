import logo from "../../logo.svg";
import style from "./LandingPage.module.css";
import React, { forwardRef, useEffect, useState } from "react";
import { Typography, Alert, Snackbar, Switch } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const LandingPage = forwardRef(({ checked, onClick }, ref) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
    handleClose();
  };

  const DrawerList = (
    <div ref={ref}>
      <Box sx={{ width: 250 }} role="presentation" onClick={handleClose2}>
        <List>
          {[
            "Rogers inbox",
            "Rogers Starred",
            "Send Rogers email",
            "Rogers Drafts",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All Rogers mail", "Rogers Trash ", "Rogers Spam"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </div>
  );

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClick2}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose2}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={style.App}>
      <Typography className={style.pageHeader} variant="h1" component="h2">
        Rogers Website
      </Typography>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      <Drawer open={open2} onClose={handleClick}>
        {DrawerList}
      </Drawer>
      <Alert open={open} variant="filled" severity="success">
        Successfully connected to Roger's Website!
      </Alert>
      <Switch checked={checked} onChange={onClick} color="warning" />
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <p>Roger Chavez's website is under construction.</p>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="chavezroger"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting!"
          data-color="#FF5F5F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </header>
      <a href="https://www.buymeacoffee.com/chavezroger" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
          alt="Buy Me A Coffee"
          style={{ height: "50px", width: "150px" }}
        />
      </a>
    </div>
  );
});

export default LandingPage;
