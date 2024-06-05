import React from 'react';
import { Box, Typography } from '@mui/material';

interface Project {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<Project> = ({ name, description, url }) => {
  return (
    <Box className="project-card" mb={4}>
      <Typography variant="h2">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <a href={url} target="_blank" rel="noopener noreferrer">Ver projeto</a>
    </Box>
  );
};

export default ProjectCard;
