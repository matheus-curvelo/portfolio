
import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label }) => {
  const theme = useTheme();
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "header__link active" : "header__link"
      }
    >
      <Typography color={theme.palette.text.primary} variant="h6">
        {label}
      </Typography>
    </NavLink>
  );
};

export default NavLinkItem;
