import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/About";
import Projetos from "./pages/Projects";
import Contato from "./pages/Contact";
import { lightTheme, darkTheme } from "./theme";
import "./App.scss";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    return savedTheme ? JSON.parse(savedTheme) : true; // Padrão para tema escuro (true)
  });

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const theme = useMemo(
    () => (isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme]
  );

  const homeContent = {
    greeting: "Oi, eu sou o Matheus!",
    introduction: "Bem-vindo ao meu portfólio!",
    description: "Sou <b>desenvolvedor front-end</b> e futuro engenheiro de software, apaixonado por tecnologia. Com quase 3 anos de experiência em desenvolvimento web, busco me tornar full stack e focar em soluções orientadas a dados. Estou aberto a oportunidades desafiadoras e colaborações inovadoras!"
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Box component="div" className="content-page">
          <Routes>
            <Route path="/" element={<Home {...homeContent} />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
