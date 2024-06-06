import React from "react";
import {Box, Link, Typography} from "@mui/material";
import "./ProjectCard.scss";

interface Project {
  name: string;
  description: string;
  url: string;
  svg: string;
  titleIcon: string;
}

const ProjectCard: React.FC<Project> = ({name, description, url, svg, titleIcon}) => {
  return (
    <Box className="project_card">
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Box className="project_card__links">
        <Link
          className="project_card__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <img className="project_card__image" title={titleIcon} src={svg} alt="SVG" />
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectCard;
