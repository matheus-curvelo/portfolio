import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {ReactComponent as Facebook} from "../assets/svg/Facebook.svg";
import {ReactComponent as Instagram} from "../assets/svg/Instagram.svg";
import {ReactComponent as Linkedin} from "../assets/svg/Linkedin.svg";
import {ReactComponent as Github} from "../assets/svg/Github.svg";
import {ReactComponent as ChevronUp} from "../assets/svg/ChevronUp.svg";
import {ReactComponent as At} from "../assets/svg/At.svg";
import {ReactComponent as Phone} from "../assets/svg/Phone.svg";

import "../styles/main.scss";

function Footer() {
  return (
    <footer>
      <div id="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="footer-content">
                <h4 className="footer-title">Entre em contato</h4>

                <ul className="contacts">
                  <li className="contact">
                    <a className="font-white" href="tel:+5511982382008">
                      <Phone /> +55 11 98238-2008
                    </a>
                  </li>
                  <li className="contact">
                    <a href="mailto:matheuscurvelo@gmail.com">
                      <At /> matheuscurvelo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer-content text-center">
                <h4 className="footer-title">Siga-me nas redes sociais</h4>
                <div className="logo-footer">
                  <a
                    className="btn btn-light"
                    href="https://www.facebook.com/matheus.curvelo1994/">
                    <Facebook />
                  </a>
                  <a
                    className="btn btn-light"
                    href="https://www.instagram.com/matheus.curvelo/">
                    <Instagram />
                  </a>
                  <a
                    className="btn btn-light"
                    href="https://www.linkedin.com/in/matheus-curvelo-9697427b/">
                    <Linkedin />
                  </a>
                  <a
                    className="btn btn-light"
                    href="https://github.com/matheus-curvelo">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 d-none d-md-block text-end">
              <div className="footer-content btn-to-top">
                <a className="btn btn-light btn-large" href="#">
                  <ChevronUp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p>
                Design feito por
                <a
                  className="anchor-black"
                  href="https://andrezigiotti.vercel.app/">
                  <span>André Zigiotti</span>
                </a>
              </p>
            </div>
            <div className="col-md-6 text-center mt-2 mt-md-0 text-md-end">
              <p>
                Feito com
                <span className="red">&#10084;</span>
                por
                <a className="anchor-black" href="#">
                  <span>Matheus Curvelo</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
