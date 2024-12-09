import React, { useEffect } from "react";
import BasicTabs from "../Navigation/BasicTabs";
import LandingPage from "./LandingPage";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Home() {
  // Handle resize event in Home component
  const handleResize = () => {
    window.dispatchEvent(new Event("resize")); // Trigger layout recalculation
  };

  return (
    <Container maxWidth={"lg"} disableGutters sx={{ height: "100vh" }}>
      <Grid container columns={12}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            alignContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <BasicTabs />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <LandingPage resize={handleResize} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
