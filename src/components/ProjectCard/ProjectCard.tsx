import React from "react";
import {Box, Link, Typography} from "@mui/material";
import "./ProjectCard.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Project {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<Project> = ({name, description, url}) => {
  return (
    <Box className="project_card">
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      {/* <Box className="project_card__links"> */}
        <Link
          color="inherit"
          className="project_card__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <GitHubIcon />
        </Link>
      {/* </Box> */}
    </Box>
  );
};

export default ProjectCard;
