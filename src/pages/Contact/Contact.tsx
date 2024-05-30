import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import "./Contact.scss";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de envio de formulário
  };

  return (
    <Box id="contact" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="contact__box" component="div">
          <Typography variant="h1" gutterBottom>
            Contato
          </Typography>

          <Typography variant="h4" gutterBottom>
            Fale comigo
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField label="Nome" fullWidth margin="normal" required />
            <TextField
              label="E-mail"
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField label="Assunto" fullWidth margin="normal" required />
            <TextField
              label="Mensagem"
              fullWidth
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // fullWidth
              sx={{mt: 2}}>
              Enviar
            </Button>
          </Box>

          <Typography variant="h4" gutterBottom mt={4}>
            Informações de Contato
          </Typography>
          <Typography component="p">
            Cidade: Indaiatuba, SP
          </Typography>
          <Typography component="p">Telefone: (11) 98238-2008</Typography>
          <Typography component="p">
            E-mail: matheuscurvelo@gmail.com
          </Typography>

          <Typography variant="h4" gutterBottom mt={4}>
            Redes Sociais
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.facebook.com/matheus.curvelo1994"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.instagram.com/matheus.curvelo"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.linkedin.com/in/matheus-curvelo/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/matheus-curvelo"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
