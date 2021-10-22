import React from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";

const Projects = () => {
  return (
    <Container id="Projects" sx={{ marginBottom: 20, padding: 0 }}>
      <Typography
        className="presentation_mynamename"
        fontWeight="bold"
        variant="h3"
        color="white"
        sx={{ marginBottom: 5, textAlign: "center" }}
      >
        Projects
      </Typography>

      <Grid
        item
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ backgroundColor: "#333333" }}>
            <CardContent>
              <Typography
                className="projectitle"
                fontWeight="bold"
                variant="h5"
                color="white"
              >
                Todo List
              </Typography>
              <div className="badges">
                <div className="badge react">React</div>
                <div className="badge css">CSS</div>
                <div className="badge js">JS</div>
                <div className="badge html5">HTML5</div>
              </div>
              <CardMedia
                component="img"
                height="250"
                image="https://i.imgur.com/bspvRyl.png"
                alt="Task images"
                sx={{ borderRadius: 2 }}
              />
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button size="small" color="primary">
                <a
                  href="https://todolist-react-perez.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='link-projects'
                >
                  View
                </a>
              </Button>

              <Button size="small" color="primary">
                <a
                  href="https://github.com/Benjvvp/portfolio_react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='link-projects'
                >
                  Source
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
