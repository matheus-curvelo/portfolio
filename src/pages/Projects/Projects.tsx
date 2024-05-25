import React from 'react';
import "./Projects.scss";
import {Box, Container, Typography} from "@mui/material";

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      className="content-page"
      component="section"
      py={8}
      bgcolor="dark">
      <Container maxWidth="xl">
        <Typography variant="h1">Projects</Typography>
      </Container>
    </Box>
  );
};

export default Projects;
