import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {ReactComponent as User} from "../assets/svg/User.svg";
import {ReactComponent as Linkedin} from "../assets/svg/Linkedin.svg";
import {ReactComponent as Github} from "../assets/svg/Github.svg";
import {ReactComponent as Whatsapp} from "../assets/svg/Whatsapp.svg";

import Me from "../assets/images/Me.png";

import "../styles/main.scss";

function AboutMe() {
  return (
    <div id="aboutMe">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="model-img text-center">
              <img className="img-fluid rounded" src={Me} alt="Me" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutMe-text">
              <div>
                <div className="text">
                  <div className="title">
                    {/* USER */}
                    <User />
                    <h2>Sobre Mim</h2>
                  </div>
                  <p>
                    Olá, me chamo<span>Matheus</span>, sou desenvolvedor web,
                    formado em engenharia mecânica, especialista na criação de
                    sites e aplicações web, atuando como front-end na empresa
                    Sites WP.
                  </p>
                  <p>
                    Como desenvolvedor e programador web realizo a criação e a
                    manutenção de sites responsivos, otimizados para todos os
                    tipos de dispositivos, entre eles, computadores, tablets e
                    celulares.
                  </p>
                </div>
                <div className="icons">
                  <a
                    className="btn btn-primary"
                    href="https://www.linkedin.com/in/matheus-curvelo-9697427b/">
                    <Linkedin />
                  </a>

                  <a
                    className="btn btn-primary"
                    href="https://github.com/matheus-curvelo">
                    <Github />
                  </a>

                  <a
                    className="btn btn-primary"
                    href="https://api.whatsapp.com/send/?phone=5511982382008&text&app_absent=0">
                    <Whatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
