import style from "./LandingPage.module.css";
import React, { forwardRef } from "react";
import { Typography, Switch, Container, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import WordAnimation from "../Utils/WordAnimation";

const LandingPage = forwardRef(({ checked, onClick }, ref) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: checked ? "#1A2027" : "#fff",
    color: checked ? theme.palette.text.secondary : theme.palette.text.primary,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} sx={{ paddingBottom: "20px" }}>
          <Grid size={{ xs: 12 }}>
            <Typography
              className={style.pageHeader}
              variant="h1"
              component="h2"
            >
              Mi Website
            </Typography>
          </Grid>
          <Grid size={{ xs: 10, md: 7.45 }}>
            <Item>
              <WordAnimation />
            </Item>
          </Grid>
          <Grid size={{ xs: 2, md: 4.55 }} offset={{ xs: 0, md: 0 }}>
            <Item>
              <Switch checked={checked} onChange={onClick} color="warning" />
            </Item>
          </Grid>
          <Grid size={12}>
            <Item>
              <a
                href="https://www.buymeacoffee.com/chavezroger"
                target="_parent"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                  alt="Buy Me A Coffee"
                  style={{ height: "50px", width: "150px" }}
                />
              </a>
            </Item>
          </Grid>
        </Grid>
        <Box sx={{ width: "100vh" }} />
      </Container>
    </>
  );
});

export default LandingPage;
