import React from "react";
import "./Home.scss";
import {Box, Container, Typography} from "@mui/material";
import AnimationComputer from "../../components/AnimationComputer";

interface HomeProps {
  greeting: string;
  introduction: string;
  description: string;
}

const Home: React.FC<HomeProps> = ({greeting, introduction, description}) => {
  return (
    <Box id="home" className="animate__animated animate__fadeIn" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="home__box" component="div">
          <Box component="div">
            <Typography
              className="animate__animated animate__lightSpeedInRight"
              variant="h1">
              {greeting}
            </Typography>
            <Typography variant="h4">{introduction}</Typography>
            <Box
              component="p"
              dangerouslySetInnerHTML={{__html: description}}
            />
          </Box>
          <AnimationComputer />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
