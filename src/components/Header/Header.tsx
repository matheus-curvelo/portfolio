import React from "react";
import {AppBar, Toolbar, Box, IconButton, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import "animate.css";

const Header: React.FC = () => {
  return (
    <AppBar id="header" color="transparent" position="static">
      <Toolbar>
        <Box className="header__box">
          <div className="header__links animate__animated animate__backInLeft">
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? "header__link active" : "header__link"
              }>
              <Typography variant="h5">Home</Typography>
            </NavLink>
            <NavLink
              to="/sobre"
              className={({isActive}) =>
                isActive ? "header__link active" : "header__link"
              }>
              <Typography variant="h5">Sobre</Typography>
            </NavLink>
            <NavLink
              to="/projetos"
              className={({isActive}) =>
                isActive ? "header__link active" : "header__link"
              }>
              <Typography variant="h5">Projetos</Typography>
            </NavLink>
            <NavLink
              to="/contato"
              className={({isActive}) =>
                isActive ? "header__link active" : "header__link"
              }>
              <Typography variant="h5">Contato</Typography>
            </NavLink>
          </div>

          <div className="header__icons animate__animated animate__backInRight">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/matheus-curvelo"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className="header__icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/matheus-curvelo"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className="header__icon">
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:matheuscurvelo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className="header__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/5511982382008"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className="header__icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </IconButton>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
