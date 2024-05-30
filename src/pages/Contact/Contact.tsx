import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import emailjs from 'emailjs-com';
import "./Contact.scss";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Obtém os dados do formulário
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Configurar os parâmetros para EmailJS
    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    // Site do EmailJS: https://dashboard.emailjs.com/admin

    // Enviar o e-mail usando EmailJS
    emailjs.send(
      'service_4jbxa25',
      'template_7dggke2',
      templateParams,
      'sKYtOpqTDPPSVEDH0'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('E-mail enviado com sucesso!');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Erro ao enviar o e-mail.');
    });

    // Resetar o formulário após o envio
    form.reset();
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
            <TextField name="name" label="Nome" fullWidth margin="normal" required />
            <TextField name="email" label="E-mail" fullWidth margin="normal" required type="email" />
            <TextField name="subject" label="Assunto" fullWidth margin="normal" required />
            <TextField
              name="message"
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
              sx={{ mt: 2 }}
            >
              Enviar
            </Button>
          </Box>

          <Typography variant="h4" gutterBottom mt={4}>
            Informações de Contato
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
                rel="noopener noreferrer"
              >
                Facebook
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.instagram.com/matheus.curvelo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.linkedin.com/in/matheus-curvelo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/matheus-curvelo"
                target="_blank"
                rel="noopener noreferrer"
              >
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
