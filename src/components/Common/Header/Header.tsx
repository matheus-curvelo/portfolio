import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
} from "@mui/material";
import "./Header.scss";
import "animate.css";
import ThemeSwitch from "../.././ThemeSwitch";
import NavLinkItem from "../.././NavLinkItem";
import IconButtonItem from "../.././IconButtonItem";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkTheme }) => {
  return (
    <AppBar
      id="header"
      position="fixed"
      sx={{
        backgroundColor: "background.default",
        borderBottom: 2,
        borderColor: "primary.main"
      }}>
      <Toolbar>
        <Container maxWidth="xl">
          <Box className="header__box">
            <Box className="header__links animate__animated animate__backInLeft">
              <NavLinkItem to="/" label="Home" />
              <NavLinkItem to="/sobre" label="Sobre" />
              <NavLinkItem to="/projetos" label="Projetos" />
              <NavLinkItem to="/contato" label="Contato" />
            </Box>
            <Box className="header__icons animate__animated animate__backInRight">
              <IconButtonItem href="https://www.linkedin.com/in/matheus-curvelo" icon={faLinkedin} />
              <IconButtonItem href="https://github.com/matheus-curvelo" icon={faGithub} />
              <IconButtonItem href="mailto:matheuscurvelo@gmail.com" icon={faEnvelope} />
              <IconButtonItem href="https://wa.me/5511982382008" icon={faWhatsapp} />
              <ThemeSwitch
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
