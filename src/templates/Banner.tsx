import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {ReactComponent as User} from "../assets/svg/User.svg";
import {ReactComponent as Facebook} from "../assets/svg/Facebook.svg";
import {ReactComponent as Github} from "../assets/svg/Github.svg";
import {ReactComponent as Instagram} from "../assets/svg/Instagram.svg";
import {ReactComponent as Linkedin} from "../assets/svg/Linkedin.svg";
import {ReactComponent as Whatsapp} from "../assets/svg/Whatsapp.svg";
import {ReactComponent as Mouse} from "../assets/svg/Mouse.svg";
import {ReactComponent as Finger} from "../assets/svg/Finger.svg";

import "../styles/main.scss";

function Banner() {
  return (
    <div id="banner">
      <div className="bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="cover-page">
              <div className="d-inline-block">
                <p>Olá, sou</p>
                <h1>Matheus Curvelo</h1>
                <h2>Desenvolvedor Front-end</h2>
                <div className="button-cover-page">
                  <a className="btn btn-primary btn-large" href="#aboutMe">
                    <User />
                    <span> Sobre mim </span>
                  </a>
                </div>
                <div className="mouse d-none d-lg-flex">
                  <Mouse />
                </div>
                <div className="finger d-flex d-lg-none">
                  <Finger />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icons-side">
        <div className="icons-div">
          <a href="https://www.facebook.com/matheus.curvelo1994">
            <Facebook />
          </a>
        </div>
        <div className="icons-div">
          <a href="https://github.com/matheus-curvelo">
            <Github />
          </a>
        </div>
        <div className="icons-div">
          <a href="https://www.instagram.com/matheus.curvelo/">
            <Instagram />
          </a>
        </div>
        <div className="icons-div">
          <a href="https://www.linkedin.com/in/matheus-curvelo-9697427b/">
            <Linkedin />
          </a>
        </div>
        <div className="icons-div">
          <a href="https://api.whatsapp.com/send/?phone=5511982382008&text&app_absent=0">
            <Whatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
