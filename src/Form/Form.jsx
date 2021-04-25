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
    paddingRight: "5px",
  },
  multilineColor: {
    color: "#FFFAFF",
  },
}));

const Form = ({ setTask, setTasks_array, Tasks_array, sindex, setSIndex }) => {
  const classes = useStyles();

  return (
    <div>
      {(() => {
        if (sindex === -1) {
          return (
            <div>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <TextField
                  InputProps={{
                    className: classes.multilineColor,
                    disableUnderline: true,
                  }}
                  className={classes.input}
                  id="standard-basic"
                  placeholder="Enter Task"
                  size="small"
                  onChange={(event) => {
                    setTask(event.target.value);
                  }}
                />
              </Grid>
            </div>
          );
        }else if(sindex > -1) {
          return (
            <div>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <TextField
                  InputProps={{
                    className: classes.multilineColor,
                    disableUnderline: true,
                  }}
                  className={classes.input}
                  id="standard-basic"
                  value={Tasks_array[sindex]}
                  size="small"
                />
              </Grid>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Form;
