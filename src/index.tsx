import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Header from "./templates/Header";
import Banner from "./templates/Banner";
import AboutMe from "./templates/AboutMe";
import Skills from "./templates/Skills";
import Footer from "./templates/Footer";

import reportWebVitals from "./reportWebVitals";

//Bootstrap 5.1.3
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <AboutMe />
    <Skills />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
