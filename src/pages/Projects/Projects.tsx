import React from 'react';
import "./Projects.scss";
import {Box, Container, Typography} from "@mui/material";

const Projects: React.FC = () => {
  return (
    <Box id="projects" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="projects__box" component="div">
          <Typography variant="h1">Projetos</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
