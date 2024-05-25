import React from "react";
import "./Home.scss";
import { Box, Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      className="content-page"
      component="section"
      py={8}
      bgcolor="background.default"
    >
      <Container maxWidth="xl">
        <Typography color="primary" variant="h1">
          Home
        </Typography>
        <Typography color="primary" variant="h3">
          Bem-vindo ao meu portfólio!
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
