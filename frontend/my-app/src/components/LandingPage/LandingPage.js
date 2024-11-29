import React, { forwardRef, useState } from "react";
import {
  Typography,
  Switch,
  Container,
  Box,
  Paper,
  CssBaseline,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import WordAnimation from "../Utils/WordAnimation";
import style from "./LandingPage.module.css";

const LandingPage = forwardRef(({ checked, onClick }, ref) => {
  const [show, setShow] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: checked ? "#1A2027" : "#fff",
    color: checked ? theme.palette.text.secondary : theme.palette.text.primary,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const clickHandler = () => {
    setShow((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <CssBaseline />
      <Container xs={12} disableGutters>
        <Grid
          size={{ xs: 12, sm: 12 }}
          container
          spacing={2}
          sx={{ padding: "20px" }}
        >
          <Grid size={{ xs: 12 }}>
            <Typography
              onClick={clickHandler}
              sx={{
                borderRadius: "5px",
                color: "white",
                ":hover": {
                  background: "#1A2027",
                },
              }}
              variant="h1"
              component="h2"
            >
              Mi Website
            </Typography>
            <Collapse in={show}>
              <h1 id="custom1" className={style.h1}>
                Roger Chavez
              </h1>

              <h2 id="custom2" className={style.h2}>
                Career Objective
              </h2>
              <p className={style.p}>
                Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz
                sapiente twee stumptown ex. Duis Carles pickled, cornhole
                Thundercats McSweeney's minim PBR vegan Tumblr irony. Kogi eu
                Thundercats, sed scenester before they sold out et aesthetic.
                Elit cred Vice ethical pickled sartorial. Stumptown roof party
                freegan High Life vero, ea sed minim meggings.
              </p>

              <h3 className={style.h3}>Truffaut disrupt sartorial deserunt</h3>
              <p className={style.p}>
                Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard
                fanny pack mumblecore cornhole cray scenester. Assumenda narwhal
                occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi
                vinyl meh, food truck banh mi Etsy magna 90's duis typewriter
                banjo organic leggings Vice.
              </p>

              <h4 className={style.h4}>
                Fingerstache nesciunt lomo nostrud hoodie
              </h4>
              <ul className={style.ul}>
                <li className={style.ul}>
                  Roof party put a bird on it incididunt sed umami craft beer
                  cred.
                </li>
                <li className={style.ul}>
                  Carles literally normcore, Williamsburg Echo Park fingerstache
                  photo booth twee keffiyeh chambray whatever.
                </li>
                <li className={style.ul}>
                  Scenester High Life Banksy, proident master cleanse tousled
                  squid sriracha ad chillwave post-ironic retro.
                </li>
              </ul>

              <p className={style.p}>
                Laboris selfies occaecat umami, forage Tumblr American Apparel.
                Retro Terry Richardson culpa id swag polaroid Intelligentsia
                American Apparel eu, esse non post-ironic fugiat master cleanse.
                Direct trade gluten-free blog, fanny pack cray labore skateboard
                before they sold out adipisicing non magna id Helvetica freegan.
                Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.
              </p>
            </Collapse>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 7.45 }}>
            <Item>
              <WordAnimation />
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4.55 }} offset={{ xs: 0, md: 0 }}>
            <Item>
              <Switch
                id="switch"
                checked={checked}
                onChange={onClick}
                color="warning"
              />
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 12 }}>
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
        <Box xs={4} sm={12} />
      </Container>
    </>
  );
});

export default LandingPage;
