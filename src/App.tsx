import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/About";
import Projetos from "./pages/Projects";
import Contato from "./pages/Contact";
import theme from "./theme";
import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
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
