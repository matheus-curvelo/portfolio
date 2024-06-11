import React, {useState} from "react";
import {Box, Link, Typography, Modal, Backdrop, Fade} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InfoIcon from "@mui/icons-material/Info";
import {useTheme} from "@mui/material/styles";
import "./ProjectCard.scss";

interface Project {
  name: string;
  description: string;
  url: string;
  homepage?: string;
}

const ProjectCard: React.FC<Project> = ({name, description, url, homepage}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="project_card">
      <Typography className="project_card__title" variant="h5">
        {name}
      </Typography>
      <Box className="project_card__icons">
        <Link
          color="inherit"
          className="project_card__icon"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <GitHubIcon />
        </Link>
        {homepage ? (
          <Link
            color="inherit"
            className="project_card__icon"
            href={homepage}
            target="_blank"
            rel="noopener noreferrer">
            <VisibilityIcon />
          </Link>
        ) : (
          <VisibilityOffIcon/>
        )}
        <InfoIcon className="project_card__icon" onClick={handleOpen} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project_description"
        aria-describedby="project_description"
        closeAfterTransition
        className="modal_project">
        <Fade in={open}>
          <Box
            className="modal_project__box"
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              boxShadow: theme.shadows[5],
              border: `2px solid ${theme.palette.primary.main}`,
            }}>
            <Typography id="project_description" variant="body1">
              {description}
            </Typography>
            <Box className="modal_project_card__icons">
              <Link
                color="inherit"
                className="modal_project_card__icon"
                href={url}
                target="_blank"
                rel="noopener noreferrer">
                <GitHubIcon />
              </Link>
              {homepage ? (
                <Link
                  color="inherit"
                  className="modal_project_card__icon"
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer">
                  <VisibilityIcon />
                </Link>
              ) : (
                <VisibilityOffIcon />
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ProjectCard;
