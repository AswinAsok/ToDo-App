import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./InputForm.css";

const useStyles = makeStyles((theme) => ({
  buttonadd: {
    backgroundColor: "#30BCED",
    color: "#FFFAFF",
    "&:hover":{
        backgroundColor: "#30BCED"
    },
    "&:disabled":{
        backgroundColor: "#30BCED"
    },
    marginTop: "20px",
    width: "10em"
  },
}));

const InputForm = () => {
  const classes = useStyles();

  return (
    <div className="input-container">
      <Grid container direction="column" justify="center" alignItems="center">
        <div>
          <Button variant="contained" className={classes.buttonadd} >
            Add Task
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default InputForm;
