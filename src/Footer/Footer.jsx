import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './Footer.css'

const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    style: { width: "19rem", padding: "5px" },
  };

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <Grid container direction="column" justify="center" alignItems="center">
          <Box boxShadow={3} borderRadius={9} {...defaultProps}>
            <div className="footer-text">Made with React 🚀 By Aswin Asok</div>
            <a href="http://bio.fm/aswinasok"><div className="footer-text">Find me around the Web 🌎</div></a>
            <a href="https://github.com/AswinAsok/ToDo-App"><div className="footer-text">Star 🌟 on GitHub</div></a>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
