import React from "react";
import BasicTabs from "../Navigation/BasicTabs";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Projects() {
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
    <Container maxWidth={"lg"} disableGutters>
      <Grid container columns={12}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            position: "fixed",
            top: 0,
            width: "100vh",
            zIndex: 1,
            alignContent: "center",
          }}
        >
          <BasicTabs />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <h1 style={styles.text}>Projects Page</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
