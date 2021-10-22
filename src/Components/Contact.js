import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import emailjs from "emailjs-com";

const Contact = () => {
  /* Inputs */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  /* Error */
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = () => {
    //eslint-disable-next-line
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!name.length > 0 || !email.length > 0 || !description.length > 0 || (regex.test(email) === false)) {
      if (regex.test(email) === false) {
        setEmailError("Please enter a valid email address");
      }
      if (name.length === 0) {
        setNameError("Please enter your full name.");
      }
      if (email.length === 0) {
        setEmailError("Please enter an email address.");
      } 
      if (description.length === 0) {
        setDescriptionError("Please enter a description");
      }

      /* Clear Errors */

      if(regex.test(email) === true || email.length > 0){
        setEmailError('')
      }
      if(description.length > 0){
        setDescriptionError('')
      }
      if(name.length > 0){
        setNameError('')
      }
      return;
    }

    const serviceID = "service_68q01h4";
    const templateID = "template_y7017yk";

    emailjs.send(
      serviceID,
      templateID,
      {
        form_name: name,
        form_email: email,
        form_description: description,
      },
      "user_WyUwNGkZurEtCDN1b262W"
    );
  };

  return (
    <Container id="Contact" sx={{ marginBottom: 20, padding: 0 }}>
      <Typography
        className="presentation_mynamename"
        fontWeight="bold"
        variant="h3"
        color="white"
        sx={{ marginBottom: 5, textAlign: "center" }}
      >
        Contact
      </Typography>
      <Grid container spacing={4} columns={8}>
        <Grid item xs={4}>
          <TextField
            error={nameError.length === 0 ? false : true}
            helperText={nameError}
            fullWidth
            id="filled-basic"
            label="Full Name"
            variant="filled"
            className="input_contact"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            error={emailError.length === 0 ? false : true}
            helperText={emailError}
            fullWidth
            id="filled-basic"
            label="Email"
            variant="filled"
            className="input_contact"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            error={descriptionError.length === 0 ? false : true}
            helperText={descriptionError}
            fullWidth
            id="filled-basic"
            label="Description"
            variant="filled"
            className="input_contact"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="contained"
            fullWidth
            className="button_contact"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
