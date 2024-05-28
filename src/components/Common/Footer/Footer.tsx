import React from "react";
import {Box, Link, Container} from "@mui/material";
import "./Footer.scss";
import "animate.css";

const Footer: React.FC = () => {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        borderTop: 2,
        borderColor: "primary.main",
      }}>
      <Container maxWidth="xl">
        <Box
          className="footer__box"
          >
          <Box component="p">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </Box>
          <Box component="p">
            Criado com <Box component="span" className="red">❤</Box> por <Link target="_blank" href="https://github.com/matheus-curvelo" rel="noreferrer">Matheus Curvelo</Link> 
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
