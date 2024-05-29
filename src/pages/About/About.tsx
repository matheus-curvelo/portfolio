import React from "react";
import "./About.scss";
import {Box, Container, Typography} from "@mui/material";
import AboutIcons from "../../components/AboutIcons";

interface AboutProps {
  biography: string[];
  education: string[];
  experience: string[];
  projects: string[];
  philosophy: string;
}

const About: React.FC<AboutProps> = ({
  biography,
  education,
  experience,
  projects,
  philosophy,
}) => {
  return (
    <Box id="about" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="about__box" component="div">
          <Typography variant="h1">Sobre Mim</Typography>

          <Typography variant="h4">Biografia Pessoal</Typography>
          {biography.map((bio, index) => (
            <Typography
              key={index}
              component="p"
              dangerouslySetInnerHTML={{__html: bio}}
            />
          ))}

          <Typography variant="h4">Educação</Typography>
          {education.map((edu, index) => (
            <Typography
              key={index}
              component="p"
              dangerouslySetInnerHTML={{__html: edu}}
            />
          ))}

          <Typography variant="h4">Experiência Profissional</Typography>
          {experience.map((exp, index) => (
            <Typography
              key={index}
              component="p"
              dangerouslySetInnerHTML={{__html: exp}}
            />
          ))}

          <Typography variant="h4">Projetos Notáveis</Typography>
          {projects.map((proj, index) => (
            <Typography
              key={index}
              component="p"
              dangerouslySetInnerHTML={{__html: proj}}
            />
          ))}

          <Typography variant="h4">Habilidades Técnicas</Typography>
          <AboutIcons />
          <Typography variant="h4">Filosofia de Trabalho</Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{__html: philosophy}}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
