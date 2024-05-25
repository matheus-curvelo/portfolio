import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c5ce7',
      dark: '#4d3cb9', // Adicione a cor dark
      light: '#9d88ff', // Adicione a cor light
    },
    secondary: {
      main: '#ced4da',
      dark: '#8d97a5', // Adicione a cor dark
      light: '#eff2f7', // Adicione a cor light
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
