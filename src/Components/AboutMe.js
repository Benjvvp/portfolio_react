import React from "react";
import {
  Grid,
  Container,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import {Download} from "@mui/icons-material"

const AboutMe = () => {
  const skills = [
    "Html5",
    "CSS3",
    "JavaScript",
    "Express",
    "Boostrap",
    "React",
    "Git"
  ];

  return (
    <Container id="About" sx={{marginBottom:20, padding:0}}>
      <Grid container textAlign="center" spacing={2} columns={16}>
        <Grid item xs={8} align="left" className="imgFade">
          <img src="/img/test.png" alt="computer" className="skills_img" />
        </Grid>
        <Grid item xs={16} sm={8} lg={8} xl={8} align="left" className="aboutmetext">
          <Typography
            className="presentation_mynamename"
            fontWeight="normal"
            variant="h2"
            color="white"
            paddingBottom={2}
          >
            About Me
          </Typography>
          <Typography
            className="presentation_mynamename"
            fontWeight="normal"
            variant="body2"
            color="white"
          >
            Hello, I'm benjamin, web-developer based on Chile. I have some
            experience in web development using some very useful frameworks and
            libraries and also in vanilla.
          </Typography>
          <Box sx={{marginTop:2}}>
              {skills.map(skill => <Typography className="skills_skill" variant="body2" color="white" key={skill} >{skill}</Typography>)}
          </Box>
          <Link
            sx={{ boxShadow: 3 }}
            className="skill_cv"
            fontWeight="bold"
            marginTop={5}
            variant="subtitle1"
            color="white"
            underline='none'
            href="/data/cv_benjamin.pdf"
            download
          >
            Download CV <Download sx={{verticalAlign: 'middle'}} />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
