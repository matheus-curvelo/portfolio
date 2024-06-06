import React from "react";
import {Box, Link, Typography} from "@mui/material";
import "./ProjectCard.scss";

interface Project {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<Project> = ({name, description, url}) => {
  return (
    <Box className="project-card">
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        Ver projeto
      </Link>
    </Box>
  );
};

export default ProjectCard;
