import React, { useEffect } from "react";
import BasicTabs from "../Navigation/BasicTabs";
import LandingPage from "./LandingPage";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Home() {
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
  };

  // Handle resize event in Home component
  const handleResize = () => {
    window.dispatchEvent(new Event("resize")); // Trigger layout recalculation
  };

  useEffect(() => {
    // Add resize event listener
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <LandingPage resize={handleResize} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
