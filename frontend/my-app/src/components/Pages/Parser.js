import React, { useState, useEffect } from "react";
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
import { motion, inView, press, animate, hover } from "framer-motion";

function Parser() {
  const [open, setOpen] = React.useState(false);
  const [cleanedText, setCleanedText] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const MotionButton = motion(Button);

  const handleClickOpen = () => {
    processText();

    if (cleanedText.length < 1) {
      return;
    }

    setOpen(true);
  };

  const handleClose = () => {
    setCleanedText("");
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
      setSnackbarMessage("Please input text!");
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
      setSnackbarMessage("Text processed successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    if (cleanedText && cleanedText !== "") {
      setOpen(true); // Open dialog only if cleanedText is not empty
    }
  }, [cleanedText]);

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
        // background: "#FDBB02",
        background: "white",
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
      <AppBar position="static" sx={{ background: "#F20F8C" }}>
        <Toolbar>
          <motion.div
            initial={{ x: "100vw" }} // Start off-screen (right)
            animate={{ x: 0 }} // Move to its normal position
            transition={{ type: "spring", stiffness: 36, damping: 10 }}
          >
            <Typography variant="h2" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Text Parser
            </Typography>
          </motion.div>
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
              label="Paste Text Here"
              variant="outlined"
              multiline
              rows={10}
              sx={{
                "& label.Mui-focused": {
                  color: "#F20F8C",
                  fontWeight: "bold", // Change label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#F20F8C", // Change outline color when focused
                  },
                },
              }}
            />
          </Box>
        </Grid>
        <Box
          spacing={2}
          sx={{ width: "100%", paddingRight: "5%", paddingLeft: "5%" }}
        >
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            fullWidth
            variant="contained"
            onClick={handleClickOpen}
            sx={{ background: "#F20F8C" }}
          >
            Submit
          </MotionButton>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{}}>
            {"Parsed text below:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{}}>
              {cleanedText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              color="primary"
              onClick={copyToClipboard}
              sx={{ color: "white", background: "#F20F8C" }}
            >
              Copy to clipboard
            </MotionButton>
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variant="contained"
              onClick={handleClose}
              autoFocus
              sx={{ color: "white", background: "#F20F8C" }}
            >
              Close
            </MotionButton>
          </DialogActions>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default Parser;
