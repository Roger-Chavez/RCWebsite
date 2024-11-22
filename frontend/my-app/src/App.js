import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Typography, Alert, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function App() {
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

  return (
    <div className="App, pageHeader">
      <Typography variant="h1" component="h2">
        Autodeploy?
      </Typography>
      <Drawer open={open2} onClose={handleClose2}>
        {DrawerList}
      </Drawer>
      <Alert open={open} variant="filled" severity="success">
        Successfully connected to Roger's Website!
      </Alert>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Roger Chavez's website is under construction.</p>
      </header>
      <Snackbar
        open={true}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Loaded Roger's Website."
        action={action}
      />
    </div>
  );
}

export default App;
