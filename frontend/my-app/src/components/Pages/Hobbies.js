import React from "react";
import BasicTabs from "../Navigation/BasicTabs";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Hobbies() {
  const styles = {
    Container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vh",
      flexDirection: "column",
      margin: 0,
    },
    text: {
      textAlign: "center",
    },
  };

  return (
    <Container style={styles.Container}>
      <Grid container columns={12} sx={{ width: "100vh" }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            position: "fixed",
            top: 0,
            width: "100vh",
            zIndex: 1,
          }}
        >
          <BasicTabs />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <h1 style={styles.text}>Hobbies Page</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hobbies;
