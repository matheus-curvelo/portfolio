import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Substitua 'caminho/para/theme' pelo caminho correto para o seu arquivo theme.ts


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  </React.StrictMode>
);
