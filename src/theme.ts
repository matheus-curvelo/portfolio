import { createTheme } from "@mui/material/styles";

const baseTypography = {
  fontFamily: "Dosis, Roboto, sans-serif",
  h1: {
    fontSize: "2.5rem",
  },
  h2: {
    fontSize: "2rem",
  },
  h3: {
    fontSize: "1.75rem",
  },
  h4: {
    fontSize: "1.5rem",
  },
  h5: {
    fontSize: "1.25rem",
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const lightTheme = createTheme({
  breakpoints: breakpoints,
  palette: {
    mode: "light",
    primary: {
      main: "#6C5CE7",
      light: "#9D88FF",
      dark: "#4D3CB9",
      contrastText: "#F1F1F1",
    },
    secondary: {
      main: "#E29A66",
      light: "#F3C2A1",
      dark: "#B57242",
      contrastText: "#F1F1F1",
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
  breakpoints: breakpoints,
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

export { lightTheme, darkTheme };
