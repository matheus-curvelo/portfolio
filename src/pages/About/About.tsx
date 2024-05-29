import React from "react";
import "./About.scss";
import {Box, Container, Typography} from "@mui/material";

const About: React.FC = () => {
  return (
    <Box id="about" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="about__box" component="div">
          <Typography variant="h1">Sobre</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
