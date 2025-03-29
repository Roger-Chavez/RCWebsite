import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  AppBar,
  Toolbar,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function RMA() {
  const [open, setOpen] = React.useState(false);
  const [cleanedText, setCleanedText] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleClickOpen = () => {
    processText();

    if (cleanedText.length < 1) {
      return;
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(cleanedText)
      .then(() => {
        setSnackbarMessage("Text Copied to Clipboard!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const processText = () => {
    // Get text from an input field (assuming an element with id 'editBox')
    let inputText = document.getElementById("text-multiline").value;

    if (!inputText) {
      setCleanedText("");
      // Show error snackbar if input is empty
      setSnackbarMessage("Please input RMA text!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    // Split text into an array by line breaks
    let lines = inputText.split(/\r?\n/);
    let cleanedList = [];

    // Process each line
    lines.forEach((line) => {
      let trimmedLine = line.trim();
      if (trimmedLine !== "") {
        let processedLine = trimmedLine.replaceAll("/", ", ");
        cleanedList.push(processedLine);
      }
    });

    let finalText = cleanedList.join(", ");

    setCleanedText(finalText); // ✅ Update state

    if (finalText) {
      setSnackbarMessage("RMA text processed successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => setOpen(true), 100); // ✅ Ensure dialog opens after state updates
    }
  };

  // Handle resize event in Home component
  const handleResize = () => {
    window.dispatchEvent(new Event("resize")); // Trigger layout recalculation
  };

  return (
    <Container
      maxWidth={"lg"}
      disableGutters
      sx={{
        width: "100vh",
        height: "100vh",
        background: "lightblue",
      }}
    >
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            RMA Parser
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container columns={12}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            alignContent: "center",
            display: "flex",
            width: "100%",
            height: "100%",
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                marginTop: 5,
                marginBottom: 5,
                width: "90vh",
                background: "white",
                borderRadius: "5px",
              },
            }}
            noValidate
            autoComplete="off"
            variant="outlined"
          >
            <TextField
              id="text-multiline"
              label="Paste RMAs Here"
              variant="outlined"
              multiline
              rows={10}
            />
          </Box>
        </Grid>
        <Box
          spacing={2}
          sx={{ width: "100%", paddingRight: "5%", paddingLeft: "5%" }}
        >
          <Button fullWidth variant="contained" onClick={handleClickOpen}>
            Submit
          </Button>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"RMA text cleaned successfully!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {cleanedText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={copyToClipboard}
            >
              Copy to clipboard
            </Button>
            <Button variant="outlined" onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default RMA;
