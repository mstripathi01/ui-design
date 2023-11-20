import React from "react";
import Navbar from "./Header/Navbar";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const styles = {
  paperContainer: {
    height: 1356,
    backgroundImage: `url(${"../Images/hero-section-slider-1.jpg"})`,
    backgroundColor: "",
  },
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx = {{backgroundColor:"#dce0e5"}}>
      <Paper style={styles.paperContainer}></Paper>
      </Box>
      </>
  );
};

export default Home;
