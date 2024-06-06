import React, {useState, useMemo, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/About";
import Projetos from "./pages/Projects";
import Contato from "./pages/Contact";
import {lightTheme, darkTheme} from "./theme";
import "./App.scss";
import {homeContent, aboutContent, contactContent} from "./config/content";

const App: React.FC = () => {
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

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      if (isDarkTheme) {
        root.classList.add("theme_dark");
        root.classList.remove("theme_light");
      } else {
        root.classList.add("theme_light");
        root.classList.remove("theme_dark");
      }
    }
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Box component="div" className="content-page">
          <Routes>
            <Route path="/" element={<Home {...homeContent} />} />
            <Route path="/sobre" element={<Sobre {...aboutContent} />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato {...contactContent} />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
