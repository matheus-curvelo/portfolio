import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import emailjs from "emailjs-com";
import "./Contact.scss";

type ContactProps = {
  contactTitle: string;
  talkToMeTitle: string;
  contactInfoTitle: string;
  phone: string;
  email: string;
  socialMediaTitle: string;
  socialMediaLinks: {
    name: string;
    url: string;
  }[];
};

const Contact: React.FC<ContactProps> = ({
  contactTitle,
  talkToMeTitle,
  contactInfoTitle,
  phone,
  email,
  socialMediaTitle,
  socialMediaLinks,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_4jbxa25",
        "template_7dggke2",
        templateParams,
        "sKYtOpqTDPPSVEDH0"
      )
      .then(response => {
        console.log("SUCCESS!", response.status, response.text);
        alert("E-mail enviado com sucesso!");
      })
      .catch(error => {
        console.error("FAILED...", error);
        alert("Erro ao enviar o e-mail.");
      });

    form.reset();
  };

  return (
    <Box id="contact" component="section" py={8}>
      <Container maxWidth="xl">
        <Box className="contact__box" component="div">
          <Typography variant="h1" gutterBottom>
            {contactTitle}
          </Typography>

          <Typography variant="h4" gutterBottom>
            {talkToMeTitle}
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Nome"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="email"
              label="E-mail"
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField
              name="subject"
              label="Assunto"
              fullWidth
              margin="normal"
              required
            />
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
              sx={{mt: 2}}>
              Enviar
            </Button>
          </Box>

          <Typography variant="h4" gutterBottom mt={4}>
            {contactInfoTitle}
          </Typography>
          <Typography component="p">Telefone: {phone}</Typography>
          <Typography component="p">E-mail: {email}</Typography>

          <Typography variant="h4" gutterBottom mt={4}>
            {socialMediaTitle}
          </Typography>
          <Grid container spacing={2}>
            {socialMediaLinks.map((link, index) => (
              <Grid item key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {link.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
