import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      '@media (max-width: 960px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (max-width: 960px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      '@media (max-width: 960px)': {
        fontSize: '1.25rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      '@media (max-width: 960px)': {
        fontSize: '1rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      '@media (max-width: 960px)': {
        fontSize: '0.75rem',
      },
    },
    h6: {
      fontSize: '1rem',
      '@media (max-width: 960px)': {
        fontSize: '0.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width: 960px)': {
        fontSize: '0.5rem',
      },
    },
  },
});

export default theme;
