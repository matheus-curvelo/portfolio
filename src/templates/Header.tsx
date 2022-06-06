import {useState, useEffect} from "react";

import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {ReactComponent as Logo} from "../assets/svg/Logo.svg";
import {ReactComponent as Bars} from "../assets/svg/Bars.svg";

import "../styles/main.scss";

function Header() {
  const [navSize, setnavSize] = useState("1rem 0");
  const [navOpacity, setnavColor] = useState("1");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("0.9") : setnavColor("1");
    window.scrollY > 10 ? setnavSize("0.5rem 0") : setnavSize("1rem 0");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header>
      <nav
        style={{
          opacity: navOpacity,
          padding: navSize,
        }}
        className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid width-1200">
          <a className="navbar-brand logo-page-dark order-0" href="/">
            <Logo id="logo" />
          </a>

          <div className="d-flex flex-row align-items-center order-lg-2 ms-4">
            {/* <label id="toggle" for="toggle-checkbox" title="Alterar tema">  
            <label id="toggle" title="Alterar tema">
              <input
                type="checkbox"
                id="toggle-checkbox"
                className="toggle-checkbox"
                name="toggle-checkbox"
              />
              <i className="indicator"></i>
            </label> */}

            <button
              id="nav-toggle"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <Bars id="bars" />
              </span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse order-lg-1"
            id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#aboutMe">
                  Sobre Mim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer-top">
                  Contato
                </a>
              </li>
            </ul>

            {/* <div className="text-center">
              <a className="language-toggle" href="/en">
                <span className="flag">
                  <img src="images/us.png" alt="" />
                </span>
                <span className="language">EN-US</span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
