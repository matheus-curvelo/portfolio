import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import "animate.css";
import ThemeSwitch from "../.././ThemeSwitch";
import NavLinkItem from "../.././NavLinkItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({toggleTheme, isDarkTheme}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <List id="drawer">
      <Box className="drawer__links" component="div">
        <ListItem button component={NavLinkItem} to="/" label="Home" />
        <ListItem button component={NavLinkItem} to="/sobre" label="Sobre" />
        <ListItem
          button
          component={NavLinkItem}
          to="/projetos"
          label="Projetos"
        />
        <ListItem
          button
          component={NavLinkItem}
          to="/contato"
          label="Contato"
        />
      </Box>
      <Box className="bottom_box">
        <Box className="drawer__icons" component="div">
          <ListItem>
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/matheus-curvelo">
              <LinkedInIcon />
            </Link>
            <Link color="inherit" href="https://github.com/matheus-curvelo">
              <GitHubIcon />
            </Link>
            <Link color="inherit" href="mailto:matheuscurvelo@gmail.com">
              <EmailIcon />
            </Link>
            <Link color="inherit" href="https://wa.me/5511982382008">
              <WhatsAppIcon />
            </Link>
          </ListItem>
        </Box>
        <Box className="drawer__theme_switch" component="div">
          <ListItem>
            <ThemeSwitch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          </ListItem>
        </Box>
      </Box>
    </List>
  );

  return (
    <>
      <AppBar
        id="header"
        position="fixed"
        color="default"
        sx={{
          borderBottom: 2,
          borderColor: "primary.main",
        }}>
        <Container maxWidth="xl">
          <Toolbar sx={{padding: "0 !important"}}>
            <Box sx={{flexGrow: 1}} />{" "}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{display: {xs: "flex", md: "none"}}}>
              <MenuIcon />
            </IconButton>
            <Box
              sx={{display: {xs: "none", md: "flex"}}}
              className="header__box">
              <Box className="header__links animate__animated animate__fadeInLeft">
                <NavLinkItem to="/" label="Home" />
                <NavLinkItem to="/sobre" label="Sobre" />
                <NavLinkItem to="/projetos" label="Projetos" />
                <NavLinkItem to="/contato" label="Contato" />
              </Box>
              <Box className="header__icons animate__animated animate__fadeInRight">
                <Link
                  color="inherit"
                  href="https://www.linkedin.com/in/matheus-curvelo">
                  <LinkedInIcon />
                </Link>
                <Link color="inherit" href="https://github.com/matheus-curvelo">
                  <GitHubIcon />
                </Link>
                <Link color="inherit" href="mailto:matheuscurvelo@gmail.com">
                  <EmailIcon />
                </Link>
                <Link color="inherit" href="https://wa.me/5511982382008">
                  <WhatsAppIcon />
                </Link>
                <ThemeSwitch
                  toggleTheme={toggleTheme}
                  isDarkTheme={isDarkTheme}
                />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {menuItems}
      </Drawer>
    </>
  );
};

export default Header;
