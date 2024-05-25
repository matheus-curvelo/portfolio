// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import "./Header.scss";
import 'animate.css';

const Header: React.FC = () => {
  return (
    <AppBar id="header" color='transparent' position="static">
      <Toolbar>
        <Box className="header__box">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "header__link active" : "header__link"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => isActive ? "header__link active" : "header__link"}
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/projetos" 
            className={({ isActive }) => isActive ? "header__link active" : "header__link"}
          >
            Projetos
          </NavLink>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => isActive ? "header__link active" : "header__link"}
          >
            Contato
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
