import React from "react";
import { Grid, Container, Typography, Avatar, Box } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import { Mail, Phone, LocationOn } from "@mui/icons-material";

const Presentation = () => {

  return (
    <Container id='Presentation' sx={{marginBottom: 20, flexGrow: 1, marginTop: 15 }}>
      <Grid container textAlign="center" spacing={2} columns={16}  className='gridphone'>
        <Grid item xs={8}  align="left">
          <Typography
            className="presentation_head"
            fontWeight="bold"
            marginBottom={5}
            variant="body1"
            color="white"
          >
            Hello I'm
          </Typography>
          <Typography
            className="presentation_mynamename"
            fontWeight="bold"
            variant="h2"
            color="white"
          >
            Benjamin Perez
          </Typography>
          <Typography
            className="presentation_skill"
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              color: "white",
              marginTop: 1,
            }}
          >
            <ReactTypingEffect
              eraseSpeed={200}
              typingDelay={1000}
              text={["FrontEnd Developer", "Student"]}
            />
          </Typography>
          <Box>
            <Typography
              marginTop={2}
              fontWeight="normal"
              variant="subtitle2"
              color="white"
            >
              <LocationOn sx={{verticalAlign: 'bottom', paddingRight: 2, color: '#08cfb0'}}/>
              Santiago, Chile
            </Typography>
            <Typography
              marginTop={1}
              fontWeight="normal"
              variant="subtitle2"
              color="white"
            >
              <Phone sx={{verticalAlign: 'bottom', paddingRight: 2}} /> 
              +56 9 6174 2415
            </Typography>
            <Typography
              marginTop={1}
              fontWeight="normal"
              variant="subtitle2"
              color="white"
            >
              <Mail sx={{verticalAlign: 'bottom', paddingRight: 2}} />
              BPerez51511a@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8} align="right">
          <Box
            sx={{
              backgroundColor: "#1b1b1d",
              display: "inline-block",
              padding: 2,
              borderRadius: 100,
            }}
          >
            <Avatar
              alt="Benjamin Perez"
              src="/img/myimage.jpg"
              className="presentation_myimg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Presentation;
