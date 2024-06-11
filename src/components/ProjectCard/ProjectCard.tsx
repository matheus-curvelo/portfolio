import React from "react";
import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InfoIcon from "@mui/icons-material/Info";
import "./ProjectCard.scss";

interface Project {
  name: string;
  description: string;
  url: string;
  homepage?: string;
}

const ProjectCard: React.FC<Project> = ({ name, description, url, homepage }) => {
  return (
    <Box className="project_card">
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Link
        color="inherit"
        className="project_card__github_url"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        <GitHubIcon />
      </Link>
      {homepage ? (
        <Link
          color="inherit"
          className="project_card__page_url"
          href={homepage}
          target="_blank"
          rel="noopener noreferrer">
          <VisibilityIcon />
        </Link>
      ) : (
        <VisibilityOffIcon className="project_card__page_url" />
      )}
    </Box>
  );
};

export default ProjectCard;
