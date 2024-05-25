import React from "react";
import "./Home.scss";
import {Box, Container, Typography} from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      className="content-page"
      component="section"
      py={8}
      bgcolor="dark">
      <Container maxWidth="xl">
        <Typography variant="h1">Home</Typography>
        <Typography variant="h3">Bem-vindo ao meu portfólio!</Typography>
      </Container>
    </Box>
  );
};

export default Home;
