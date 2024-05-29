// import React from "react";
// import "./About.scss";
// import {Box, Container, Typography} from "@mui/material";

// const About: React.FC = () => {
//   return (
//     <Box id="about" component="section" py={8}>
//       <Container maxWidth="xl">
//         <Box className="about__box" component="div">
//           <Typography variant="h1">Sobre</Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default About;

import React from "react";
import "./About.scss";
import {Box, Container, Typography} from "@mui/material";
import AboutIcons from "../../components/AboutIcons";

const About: React.FC = () => {
  return (
    <Box id="about" component="section" py={8}>
      <Container maxWidth="xl">
        <Typography variant="h2" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" paragraph>
          Olá, sou Matheus, um desenvolvedor front-end e futuro engenheiro de
          software apaixonado por tecnologia. Com quase 3 anos de experiência em
          desenvolvimento web, estou sempre em busca de novas oportunidades e
          colaborações inovadoras.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <AboutIcons />
      </Container>
    </Box>
  );
};

export default About;
