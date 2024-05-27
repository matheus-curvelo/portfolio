import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Common/Header';
import Home from './pages/Home';
import Sobre from './pages/About';
import Projetos from './pages/Projects';
import Contato from './pages/Contact';
import { lightTheme, darkTheme } from './theme';
import './App.scss';

function App() {
  // Inicializa o estado do tema com base no valor salvo no localStorage
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme ? JSON.parse(savedTheme) : true; // Padrão para tema escuro (true)
  });

  // Função para alternar o tema e salvar a preferência no localStorage
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  // Memorize o tema para evitar recriação desnecessária
  const theme = useMemo(() => (isDarkTheme ? darkTheme : lightTheme), [isDarkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
