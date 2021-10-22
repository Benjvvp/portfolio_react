import React from "react";
import { AppBar, Link, Toolbar } from "@material-ui/core";
const NavBar = () => {
  const texts = [
    {name: "About", link: '#About'},
    {name: "Skills", link: '#Skills'},
    {name: "Projects", link: '#Projects'},
    {name: "Contact", link: '#Contact'}
  ];

  return (
    <AppBar color="transparent" elevation={0} position='static'>
      <Toolbar sx={{ justifyContent: "center" }}>
        {texts.map((object) => (
          <Link
            className="bottomBarAnimation nav-text"
            underline="none"
            color="white"
            href={object.link}
            p={3}
            variant="subtitle1"
            sx={{ fontWeight: "bold" }}
            key={object.name}
          >
            {object.name}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
