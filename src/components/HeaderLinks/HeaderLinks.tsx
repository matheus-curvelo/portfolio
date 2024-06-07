import React from "react";
import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import "./HeaderLinks.scss";

const headerLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/sobre",
    label: "Sobre",
  },
  {
    to: "/projetos",
    label: "Projetos",
  },
  {
    to: "/contato",
    label: "Contato",
  },
];

const HeaderLinks: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      {headerLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({isActive}) =>
            isActive ? "header__link active" : "header__link"
          }>
          <Box color={theme.palette.text.primary} component="span">
            {link.label}
          </Box>
        </NavLink>
      ))}
    </>
  );
};

export default HeaderLinks;
