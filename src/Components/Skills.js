import React from "react";
import { Container, Typography, Card, Grid } from "@material-ui/core";

const Skills = () => {
  const skills = [
    { color: "#f16528", font: 'fab fa-html5' },
    { color: "#2299f7", font: 'fab fa-css3-alt' },
    { color: "#fbd602", font: 'fab fa-js' },
    { color: "#8bc500", font: 'fab fa-node-js' },
    { color: "#7952b3", font: 'fab fa-bootstrap' },
    { color: "#6bd9fe", font: 'fab fa-react' },
    { color: "#de4c36", font: 'fab fa-git-square'}
  ];

  return (
    <Container id="Skills" sx={{ marginBottom: 20, padding: 0 }}>
      <Typography
        className="presentation_mynamename"
        fontWeight="bold"
        variant="h3"
        color="white"
        sx={{ marginBottom: 5, textAlign: 'center'}}
      >
        Technical Skills
      </Typography>

      <Grid
        item
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent='center'
      >
        {skills.map((skill, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <Card sx={{padding: 3, backgroundColor: '#333333', textAlign: 'center'}} className="card">
              <i style={{color: skill.color}} className={skill.font}></i>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
