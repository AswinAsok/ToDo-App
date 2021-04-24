import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Form.css";

const defaultProps = {
  style: { width: "90%", height: "5rem", marginTop: "20px" },
};

const useStyles = makeStyles((theme) => ({
  
}));

const Form = ({ clicked, setClicked }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box className="form-box" borderRadius={16} {...defaultProps}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
           
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Form;
