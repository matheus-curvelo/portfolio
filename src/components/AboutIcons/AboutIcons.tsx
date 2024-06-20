import React from "react";
import "./AboutIcons.scss";
import "animate.css";
import { Box, Typography } from "@mui/material";
import { ReactComponent as HtmlIcon } from "../../assets/svg/html.svg";
import { ReactComponent as CssIcon } from "../../assets/svg/css.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/svg/javascript.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/svg/typescript.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/svg/bootstrap.svg";
import { ReactComponent as MaterialUIIcon } from "../../assets/svg/mui.svg";
import { ReactComponent as SassIcon } from "../../assets/svg/sass.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg/react.svg";
import { ReactComponent as NodeJsIcon } from "../../assets/svg/nodejs.svg";
import { ReactComponent as NextJsIcon } from "../../assets/svg/nextjs.svg";
import { ReactComponent as GitHubIcon } from "../../assets/svg/github.svg";
import { ReactComponent as GitIcon } from "../../assets/svg/git.svg";
import { ReactComponent as DockerIcon } from "../../assets/svg/docker.svg";
import { ReactComponent as ReactNativeIcon } from "../../assets/svg/reactnative.svg";
import { ReactComponent as ExpressIcon } from "../../assets/svg/express.svg";
import { ReactComponent as GoLangIcon } from "../../assets/svg/golang.svg";

const skills = [
  { component: HtmlIcon, name: "HTML" },
  { component: CssIcon, name: "CSS" },
  { component: JavaScriptIcon, name: "JavaScript" },
  { component: TypeScriptIcon, name: "TypeScript" },
  { component: BootstrapIcon, name: "Bootstrap" },
  { component: MaterialUIIcon, name: "Material UI" },
  { component: SassIcon, name: "Sass" },
  { component: ReactIcon, name: "React" },
  { component: NodeJsIcon, name: "NodeJs" },
  { component: NextJsIcon, name: "NextJs" },
  { component: GitHubIcon, name: "GitHub" },
  { component: GitIcon, name: "Git" },
  { component: DockerIcon, name: "Docker" },
];

const learningSkills = [
  { component: ReactNativeIcon, name: "React Native" },
  { component: ExpressIcon, name: "Express" },
  { component: GoLangIcon, name: "Golang" },
];

// Função para embaralhar uma array
const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

interface AboutIconsProps {
  shuffle?: boolean;
}

const AboutIcons: React.FC<AboutIconsProps> = ({ shuffle = false }) => {
  // Embaralhar as arrays de habilidades se a prop shuffle for true
  const shuffledSkills = shuffle ? shuffleArray([...skills]) : skills;
  const shuffledLearningSkills = shuffle ? shuffleArray([...learningSkills]) : learningSkills;

  return (
    <Box component="div" className="about__icons">
      <Typography variant="h4">Habilidades Técnicas</Typography>
      <Box component="div" className="about__icons_item">
        {shuffledSkills.map(({ component: IconComponent, name }, index) => (
          <Box component="div" className="icon" key={index}>
            <IconComponent className="icon__svg" width="50" height="50" />
            {name}
          </Box>
        ))}
      </Box>
      <Typography variant="h4">Habilidades em Aprendizado</Typography>
      <Box component="div" className="about__icons_item">
        {shuffledLearningSkills.map(({ component: IconComponent, name }, index) => (
          <Box component="div" className="icon" key={index}>
            <IconComponent className="icon__svg" width="50" height="50" />
            {name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutIcons;
