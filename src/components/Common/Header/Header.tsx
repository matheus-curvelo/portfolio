import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import "animate.css";
import ThemeSwitch from "../../ThemeSwitch";
import HeaderIcons from "../../HeaderIcons";
import HeaderLinks from "../../HeaderLinks";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <List id="drawer">
      <Box className="drawer__links" component="div">
        <HeaderLinks />
      </Box>
      <Box className="bottom_box">
        <Box className="drawer__icons" component="div">
          <HeaderIcons />
        </Box>
        <Box className="drawer__theme_switch" component="div">
          <ThemeSwitch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ padding: "0 !important" }}>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="header__box"
            >
              <Box className="header__links animate__animated animate__fadeInLeft">
                <HeaderLinks />
              </Box>
              <Box className="header__icons animate__animated animate__fadeInRight">
                <HeaderIcons />
                <ThemeSwitch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {menuItems}
      </Drawer>
    </>
  );
};

export default Header;
