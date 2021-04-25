import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Form.css";

const defaultProps = {
  style: { width: "55%", marginTop: "20px" },
};

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#30BCED",
    borderWidth: "0",
    width: "60%",
    marginTop: "20px",
    marginBottom: "10px",
    borderRadius: "5px",
    paddingTop: "5px",
    paddingLeft: "5px",
  },
  multilineColor: {
    color: "#FFFAFF",
  },
}));

const Form = ({ clicked, setClicked, Task, setTasks_array, Tasks_array }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          InputProps={{
            className: classes.multilineColor,
            disableUnderline: true
          }}
          className={classes.input}
          id="standard-basic"
          placeholder="Enter Task"
          size="small"
          onChange={(event) => {
            if (
              event.target.value.substr(event.target.value.length - 1) === "."
            ) {
              Task = event.target.value;
              setTasks_array((Tasks_array) => Tasks_array.concat(Task));
              setClicked(false);
            }
          }}
        />
      </Grid>
    </div>
  );
};

export default Form;
