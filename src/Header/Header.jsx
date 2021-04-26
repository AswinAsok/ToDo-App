import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './Header.css'

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  style: { width: "15rem", padding: "5px" },
};

const Header = () => {
  return (
    <div className="header-container">
      <Grid container direction="column" justify="center" alignItems="center">
        <Box boxShadow={3} borderRadius={9} {...defaultProps}>
          <div className="heading-text">Minimalistic ToDo App </div>
        </Box>
      </Grid>
    </div>
  );
};

export default Header;
