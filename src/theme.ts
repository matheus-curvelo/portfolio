import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6c5ce7',
      dark: '#4d3cb9',
      light: '#9d88ff',
    },
    secondary: {
      main: '#ced4da',
      dark: '#8d97a5',
      light: '#eff2f7',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c5ce7',
      dark: '#4d3cb9',
      light: '#9d88ff',
    },
    secondary: {
      main: '#ced4da',
      dark: '#8d97a5',
      light: '#eff2f7',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export { lightTheme, darkTheme };
