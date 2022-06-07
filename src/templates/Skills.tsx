import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {ReactComponent as Html} from "../assets/svg/Html.svg";
import {ReactComponent as Css} from "../assets/svg/Css.svg";
import {ReactComponent as Js} from "../assets/svg/Js.svg";
import {ReactComponent as Bootstrap} from "../assets/svg/Bootstrap.svg";
import {ReactComponent as Node} from "../assets/svg/Node.svg";
import {ReactComponent as React} from "../assets/svg/React.svg";
import {ReactComponent as Sass} from "../assets/svg/Sass.svg";
import {ReactComponent as Github} from "../assets/svg/Github.svg";
import {ReactComponent as Lamp} from "../assets/svg/Lamp.svg";
import {ReactComponent as Folder} from "../assets/svg/Folder.svg";
import {ReactComponent as Users} from "../assets/svg/Users.svg";

import "../styles/main.scss";

function Skills() {
  const githubUsername = "matheus-curvelo";
  const githubApiHost = "https://api.github.com";
  const githubUserEndpoint = `${githubApiHost}/users/${githubUsername}`;

  async function loadGithubData() {
    const res = await fetch(githubUserEndpoint);
    const data = await res.json();
    const prefix = "github_";
    const keys = {
      name: data.name,
      username: data.login,
      repos: data.public_repos,
      followers: data.followers,
      url: data.html_url,
    };

    Object.keys(keys).map(id => {
      const element_name = document.getElementById(`${prefix}name`);
      const element_username = document.getElementById(`${prefix}username`);
      const element_repos = document.getElementById(`${prefix}repos`);
      const element_followers = document.getElementById(`${prefix}followers`);
      const element_url = document.getElementById(`${prefix}url`);

      const name = keys.name;
      const username = keys.username;
      const repos = keys.repos;
      const followers = keys.followers;
      const url = keys.url;

      if (id !== "url") {
        element_name!.innerText = name;
        element_username!.innerText = username;
        element_repos!.innerText = repos;
        element_followers!.innerText = followers;
      }

      element_url!.setAttribute("href", url);
    });
  }

  loadGithubData();

  return (
    <div id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="skills-text">
              <div className="title">
                <Lamp />
                <h2>Habilidades</h2>
              </div>
              <p>
                Toda a parte de<span>HTML</span>(linguagem de marcação),
                <span>CSS</span>(linguagem de estilo) e<span>JavaScript</span>
                (Linguagem de script/programação).
              </p>
              <p>
                Noções de<span>SEO</span>para otimização de sites que visam
                melhorar seu posicionamento nos Mecanismos de Buscas.
              </p>
              <p>
                Conhecimento com programas de edição de imagem e design gráfico,
                como<span>photoshop</span>e<span className="me-0">figma</span>.
              </p>
              <p>
                Atualmente focando os estudos em<span>React</span>e
                <span>React Native</span>e também em
                <span className="me-0">UX/UI Design</span>.
              </p>
            </div>

            <div className="developer-icons">
              <div className="developer-icon-wrapper" title="HTML 5">
                <span className="btn btn-dev">
                  <Html />
                </span>
              </div>

              <div className="developer-icon-wrapper" title="CSS 3">
                <span className="btn btn-dev">
                  <Css />
                </span>
              </div>

              <div className="developer-icon-wrapper" title="Javascript">
                <span className="btn btn-dev">
                  <Js />
                </span>
              </div>

              <div className="developer-icon-wrapper" title="Bootstrap 5">
                <span className="btn btn-dev">
                  <Bootstrap />
                </span>
              </div>

              <div className="developer-icon-wrapper" title="Node JS">
                <span className="btn btn-dev">
                  <Node />
                </span>
              </div>

              <div className="developer-icon-wrapper" title="React">
                <span className="btn btn-dev">
                  <React />
                </span>
              </div>

              <div className="developer-icon-wrapper" title="Sass">
                <span className="btn btn-dev">
                  <Sass />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="area-git">
              <div className="logo-git">
                <Github />
                <h4 id="github_name"></h4>
                <p id="github_username"></p>
              </div>

              <div className="api-info">
                <div className="info-space" title="Repositórios">
                  <Folder />
                  <span id="github_repos"> 0 </span>
                </div>

                <div className="info-space" title="Seguidores">
                  <Users />
                  <span id="github_followers"> 0 </span>
                </div>
              </div>

              <div>
                <a id="github_url" className="btn btn-primary">
                  <Github />
                  <span>Ver perfil</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
