import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Form.css";

const defaultProps = {
  style: { width: "75%", height: "5rem", marginTop: "20px" },
};

const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  input: {
    color: "white",
    backgroundColor: "white",
    borderWidth: "0",
    width: "55%",
    height: "25px%",
    marginTop: "10px",
    borderRadius: "10px",
    paddingTop:"5px",
    paddingLeft: "5px"
  },
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
            <TextField
              className={classes.input}
              id="standard-basic"
              label=""
              placeholder="Enter Task"
              size= "small"
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Form;
