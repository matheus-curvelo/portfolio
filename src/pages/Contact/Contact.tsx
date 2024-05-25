import React from 'react';
import "./Contact.scss";
import {Box, Container, Typography} from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Box
      id="contact"
      className="content-page"
      component="section"
      py={8}
      bgcolor="dark">
      <Container maxWidth="xl">
        <Typography variant="h1">Contact</Typography>
      </Container>
    </Box>
  );
};

export default Contact;
