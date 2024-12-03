import React from "react";
import BasicTabs from "../Navigation/BasicTabs";
import { Container } from "@mui/material";

function Hobbies() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vh",
      backgroundColor: "orange",
      margin: 0,
    },
    text: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <container>
        <BasicTabs />
        <h1 style={styles.text}>Hobbies Page</h1>
      </container>
    </div>
  );
}

export default Hobbies;
