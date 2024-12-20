import React from "react";
import BasicTabs from "../Navigation/BasicTabs";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Hobbies() {
  // Handle resize event in Home component
  const handleResize = () => {
    window.dispatchEvent(new Event("resize")); // Trigger layout recalculation
  };

  return (
    <Container
      maxWidth={"lg"}
      disableGutters
      sx={{ background: "yellow", height: "100vh", marginTop: "-15px" }}
    >
      <Grid container columns={12}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            zIndex: 1,
            alignContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <BasicTabs />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          {handleResize()}
          <h1 style={{ "text-align": "center" }}>Hobbies Page</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hobbies;
