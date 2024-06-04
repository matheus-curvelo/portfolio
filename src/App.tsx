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

  const homeContent = {
    greeting: "Oi, eu sou o Matheus!",
    introduction: "Bem-vindo ao meu portfólio!",
    description:
      "Sou <span class='emphasis'>desenvolvedor front-end</span> e futuro engenheiro de software, apaixonado por tecnologia. Com quase 3 anos de experiência em desenvolvimento web, busco desenvolver minhas habilidades como full stack e especializar-me em React. Estou aberto a oportunidades desafiadoras e colaborações inovadoras!",
  };

  const aboutContent = {
    biography: [
      "Me chamo Matheus Curvelo e sou um desenvolvedor Front-End. Em 2019, me tornei Tecnólogo em Mecânica - Processos de Produção pela Faculdade de Tecnologia de São Paulo. Comecei minha jornada no desenvolvimento web em 2021 na empresa <span class='color_primary'>Sites WP</span>, onde trabalho até hoje. Tenho uma sólida experiência em <span class='color_primary'>JavaScript</span>, <span class='color_primary'>TypeScript</span> e <span class='color_primary'>Sass/CSS</span>, e estou constantemente aprimorando minhas habilidades na criação de interfaces de usuário, frequentemente utilizando o <span class='color_primary'>Figma</span>. Além disso, sou bastante familiarizado com ferramentas como <span class='color_primary'>NodeJS</span>, <span class='color_primary'>Bootstrap</span>, <span class='color_primary'>MUI</span> e <span class='color_primary'>Docker</span>, que uso para desenvolver aplicativos mais robustos.",
      "Atualmente, sigo ampliando meu conjunto de habilidades estudando <span class='color_primary'>ReactJS</span>, <span class='color_primary'>NextJS</span> e <span class='color_primary'>React Native</span> para adicionar novas ferramentas ao meu arsenal de desenvolvimento. Estou cursando uma pós-graduação em Engenharia de Software pela Escola Superior de Agricultura Luiz de Queiroz da Universidade de São Paulo - USP. Meu objetivo é desenvolver minhas habilidades como full stack e especializar-me em ReactJS. Além disso, sou apaixonado por jogos eletrônicos de videogame e aprecio uma boa música.",
      "Estou sempre em busca de novas oportunidades de colaboração, desafios emocionantes e conexões na indústria de tecnologia.",
      "<span class='color_primary text_bold'>Espero que goste do meu portfólio! Sinta-se à vontade para me chamar para conversar.</span>",
    ],
    education: [
      "• Tecnólogo em Mecânica - Processos de Produção pela FATEC-SP (2019)",
      "• Pós-graduação em Engenharia de Software pela Escola Superior de Agricultura Luiz de Queiroz da USP (em andamento)",
    ],
    experience: ["• Desenvolvedor Web na Sites WP (2021 - Presente)"],
    projects: [
      "• <a class='color_primary text_decoration_none' target='_blank' href='https://www.mam.org.br/'>Museu de Arte Moderna de São Paulo</a>",
      "• <a class='color_primary text_decoration_none' target='_blank' href='https://eirich.com.br/'>Grupo Eirich</a>",
      "• <a class='color_primary text_decoration_none' target='_blank' href='https://garotasdomotion.com/'>Garotas do Motion</a>",
    ],
    philosophy:
      "Acredito que a colaboração e a comunicação são fundamentais para o sucesso de qualquer projeto. Minha abordagem é centrada em escrever código limpo e eficiente, mantendo sempre o foco na entrega de valor ao cliente.",
  };

  const contactContent = {
    contactTitle: "Contato",
    talkToMeTitle: "Fale comigo",
    contactInfoTitle: "Informações de Contato",
    phone: "(11) 98238-2008",
    email: "matheuscurvelo@gmail.com",
    socialMediaTitle: "Redes Sociais",
    socialMediaLinks: [
      {name: "Facebook", url: "https://www.facebook.com/matheus.curvelo1994"},
      {name: "Instagram", url: "https://www.instagram.com/matheus.curvelo"},
      {name: "LinkedIn", url: "https://www.linkedin.com/in/matheus-curvelo/"},
      {name: "GitHub", url: "https://github.com/matheus-curvelo"},
    ],
  };

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
