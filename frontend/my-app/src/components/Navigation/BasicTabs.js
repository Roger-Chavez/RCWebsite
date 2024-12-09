import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, Link } from "react-router";
import styles from "./BasicTabs.module.css";
import { CssBaseline } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const routeToIndex = {
    "/home": 0,
    "/projects": 1,
    "/hobbies": 2,
  };

  const currentTab = routeToIndex[location.pathname] || 0;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className={styles.tab}
              label="Home"
              component={Link}
              to="/home"
              viewTransition
              sx={{
                "&.Mui-selected": {
                  color: "#1976d2",
                  backgroundColor: "white",
                },
              }}
            />
            <Tab
              className={styles.tab}
              label="Projects"
              component={Link}
              to="/projects"
              viewTransition
              sx={{
                "&.Mui-selected": {
                  color: "#1976d2",
                  backgroundColor: "white",
                },
              }}
            />
            <Tab
              className={styles.tab}
              label="Hobbies"
              component={Link}
              to="/hobbies"
              viewTransition
              sx={{
                "&.Mui-selected": {
                  color: "#1976d2",
                  backgroundColor: "white",
                },
              }}
            />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
