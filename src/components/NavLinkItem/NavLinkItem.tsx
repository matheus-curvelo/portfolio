import React from "react";
import {NavLink} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import "./NavLinkItem.scss";

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({to, label}) => {
  const theme = useTheme();
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        isActive ? "header__link active" : "header__link"
      }>
      <Box color={theme.palette.text.primary} component="span">
        {label}
      </Box>
    </NavLink>
  );
};

export default NavLinkItem;
