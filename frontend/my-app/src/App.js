import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Typography, Alert, Snackbar, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="App, pageHeader">
      <Typography variant="h1" component="h2">
        Roger's Webpage
      </Typography>
      <Alert variant="filled" severity="success">
        Successfully connected to Roger's Website!
      </Alert>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Roger Chavez's website is under construction.</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
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
