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
    mode: "light",
    primary: {
      main: "#6C5CE7",
      light: "#9D88FF",
      dark: "#4D3CB9",
      contrastText: "#fefefe",
    },
    secondary: {
      main: "#4CCD99",
      light: "#72E1B5",
      dark: "#32916E",
      contrastText: "#0C0C0C",
    },
    background: {
      default: "#F1F1F1",
    },
    text: {
      primary: "#0C0C0C",
    },
  },
  typography: baseTypography,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6C5CE7",
      light: "#9D88FF",
      dark: "#4D3CB9",
      contrastText: "#0C0C0C",
    },
    secondary: {
      main: "#4CCD99",
      light: "#72E1B5",
      dark: "#32916E",
      contrastText: "#0C0C0C",
    },
    background: {
      default: "#0C0C0C",
    },
    text: {
      primary: "#F1F1F1",
    },
  },
  typography: baseTypography,
});

export {lightTheme, darkTheme};
