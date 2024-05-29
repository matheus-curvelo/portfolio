import React from 'react';
import "./Contact.scss";
import {Box, Container, Typography} from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Box id="contact" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="contact__box" component="div">
          <Typography variant="h1">Contato</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
