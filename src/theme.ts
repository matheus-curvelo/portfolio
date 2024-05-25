import {createTheme} from "@mui/material/styles";

const baseTypography = {
  fontFamily: "Dosis, Roboto, sans-serif",
  h1: {
    fontSize: "2.5rem",
    "@media (max-width:900px)": {
      fontSize: "2rem",
    },
  },
  h2: {
    fontSize: "2rem",
    "@media (max-width:900px)": {
      fontSize: "1.5rem",
    },
  },
  h3: {
    fontSize: "1.75rem",
    "@media (max-width:900px)": {
      fontSize: "1.25rem",
    },
  },
  h4: {
    fontSize: "1.5rem",
    "@media (max-width:900px)": {
      fontSize: "1rem",
    },
  },
  h5: {
    fontSize: "1.25rem",
    "@media (max-width:900px)": {
      fontSize: "0.75rem",
    },
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#6c5ce7",
      light: "#9d88ff",
      dark: "#4d3cb9",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ced4da",
      light: "#eff2f7",
      dark: "#8d97a5",
      contrastText: "#000000",
    },
    background: {
      default: '#faf7e9',
    },
  },
  typography: baseTypography,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#6c5ce7",
      light: "#9d88ff",
      dark: "#4d3cb9",
      contrastText: "#faf7e9",
    },
    secondary: {
      main: "#ced4da",
      light: "#eff2f7",
      dark: "#8d97a5",
      contrastText: "#faf7e9",
    },
    background: {
      default: '#050816',
    },
  },
  typography: baseTypography,
});

export {lightTheme, darkTheme};
