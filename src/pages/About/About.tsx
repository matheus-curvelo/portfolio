import React from 'react';
import "./About.scss";
import {Box, Container, Typography} from "@mui/material";

const About: React.FC = () => {
  return (
    <Box
      id="about"
      className="content-page"
      component="section"
      py={8}
      bgcolor="dark">
      <Container maxWidth="xl">
        <Typography variant="h1">About</Typography>
      </Container>
    </Box>
  );
};

export default About;
