import React from "react";
import "./Home.scss";
import { Box, Container, Typography } from "@mui/material";
import AnimationComputer from "../../components/AnimationComputer";

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      component="section"
      py={8}
    >
      <Container maxWidth="xl">
        <Typography variant="h1">
          Home
        </Typography>
        <Typography variant="h3">
          Bem-vindo ao meu portfólio!
        </Typography>
        <AnimationComputer/>
      </Container>
    </Box>
  );
};

export default Home;
