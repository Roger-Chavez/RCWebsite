import React, { forwardRef, useState, useEffect } from "react";
import {
  Typography,
  Switch,
  Container,
  Paper,
  CssBaseline,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import WordAnimation from "../Utils/WordAnimation";
import style from "./LandingPage.module.css";
import AddIcon from "@mui/icons-material/Add";
import BasicTabs from "../Navigation/BasicTabs";
const LandingPage = forwardRef(({ resize }, ref) => {
  const [show, setShow] = useState(false);
  const [checked, setCheck] = useState(true);

  useEffect(() => {
    // Apply body styles when this component is mounted
    document.body.classList.add(checked ? style.article : style.article2);

    // Cleanup styles when the component is unmounted
    return () => {
      document.body.classList.remove(checked ? style.article : style.article2);
    };
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    background: checked ? "#1A2027" : "#fff",
    color: checked ? theme.palette.text.secondary : theme.palette.text.primary,
    padding: theme.spacing(1),
    textAlign: "center",
    height: "100%",
    display: "block",
    alignContent: "center",
  }));

  const clickHandler = () => {
    setShow((prev) => {
      return !prev;
    });
  };

  const switchHandler = () => {
    setCheck((prev) => !prev);
  };

  useEffect(() => {
    if (show) {
      resize();
    }
    // If you want to handle the closing as well
    else {
      resize();
    }
  }, [show, resize]); // Runs whenever 'show' changes

  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} disableGutters>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          container
          spacing={2}
          columns={12}
          sx={{
            paddingTop: "32px",
            paddingBottom: "32px",
            flexDirection: { xs: "column", sm: "row" },
          }}
          disableGutters
        >
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Typography
              className={style.container}
              sx={{
                background: checked ? "#1A2027" : "#fff",
                borderRadius: "5px",
                textAlign: "center",
                width: "100%",
                color: checked ? "white" : "black",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                letterSpacing: "-0.06em",
                fontWeight: 100,
                ":hover": {
                  margin: "-1px",
                  border: checked ? "white 1px solid" : "yellow 1px solid",
                },
              }}
              variant="h1"
              component="h2"
            >
              Mi Website
              <AddIcon
                className={style.anchorButton}
                onClick={clickHandler}
                color="action"
              />
            </Typography>
            <Collapse in={show}>
              <div className={style.collapseContainer}>
                <div className={style.aboutme}>
                  <p className={style.p}>About me</p>
                </div>
              </div>
            </Collapse>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 7.45 }} alignItems="stretch">
            <Item>
              <WordAnimation />
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4.55 }} offset={{ xs: 0, md: 0 }}>
            <Item>
              <Switch
                id="switch"
                checked={checked}
                onChange={switchHandler}
                color="warning"
              />
            </Item>
          </Grid>
          {/* <Grid size={{ xs: 12, sm: 12 }} spacing={2}>
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
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
});

export default LandingPage;
