import React from "react";
import "./AboutIcons.scss";
import "animate.css";
import {Box} from "@mui/material";

import {ReactComponent as HtmlIcon} from "../../assets/svg/html.svg";
import {ReactComponent as CssIcon} from "../../assets/svg/css.svg";
import {ReactComponent as JavaScriptIcon} from "../../assets/svg/javascript.svg";
import {ReactComponent as BootstrapIcon} from "../../assets/svg/bootstrap.svg";
import {ReactComponent as SassIcon} from "../../assets/svg/sass.svg";
import {ReactComponent as MaterialUIIcon} from "../../assets/svg/mui.svg";
import {ReactComponent as ReactIcon} from "../../assets/svg/react.svg";
import {ReactComponent as ReactNativeIcon} from "../../assets/svg/reactnative.svg";
import {ReactComponent as NextJsIcon} from "../../assets/svg/nextjs.svg";
import {ReactComponent as NodeJsIcon} from "../../assets/svg/nodejs.svg";
import {ReactComponent as GitHubIcon} from "../../assets/svg/github.svg";
import {ReactComponent as GitIcon} from "../../assets/svg/git.svg";
import {ReactComponent as TypeScriptIcon} from "../../assets/svg/typescript.svg";
import {ReactComponent as WordPressIcon} from "../../assets/svg/wordpress.svg";
import {ReactComponent as DockerIcon} from "../../assets/svg/docker.svg";
import {ReactComponent as AxiosIcon} from "../../assets/svg/axios.svg";
import {ReactComponent as ExpressIcon} from "../../assets/svg/express.svg";

const icons = [
  {component: HtmlIcon, name: "HTML"},
  {component: CssIcon, name: "CSS"},
  {component: JavaScriptIcon, name: "JavaScript"},
  {component: BootstrapIcon, name: "Bootstrap"},
  {component: SassIcon, name: "Sass"},
  {component: MaterialUIIcon, name: "Material UI"},
  {component: ReactIcon, name: "React"},
  {component: ReactNativeIcon, name: "React Native"},
  {component: NextJsIcon, name: "NextJs"},
  {component: NodeJsIcon, name: "NodeJs"},
  {component: GitHubIcon, name: "GitHub"},
  {component: GitIcon, name: "Git"},
  {component: TypeScriptIcon, name: "TypeScript"},
  {component: WordPressIcon, name: "WordPress"},
  {component: DockerIcon, name: "Docker"},
  {component: AxiosIcon, name: "Axios"},
  {component: ExpressIcon, name: "Express"},
];

const AboutIcons: React.FC = () => {
  return (
    <Box component="div" className="icons">
      {icons.map(({component: IconComponent, name}, index) => (
        <Box component="div" className="icon">
          <IconComponent className="icon__svg" width="50" height="50" />
          {name}
        </Box>
      ))}
    </Box>
  );
};

export default AboutIcons;
