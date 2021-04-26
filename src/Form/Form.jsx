import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./Form.css";
import Fade from "@material-ui/core/Fade";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Form = ({
  setTask,
  setTasks_array,
  Tasks_array,
  sindex,
  setSIndex,

  editstr,
  setEditstr,

  setEdited,
  clicked,

  priority, 
  setPriority,

  tempri,
  setTempri
}) => {
  const classes = useStyles();

  return (
    <div>
      {(() => {
        if (sindex === -1) {
          return (
            <div>
              <Fade in={clicked}>
                <Grid
                  container
                  direction="row"
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
                    autoComplete="off"
                    onChange={(event) => {
                      setTask(event.target.value);
                    }}
                  />

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={(event) => {
                      setTempri(event.target.value);
                    }}
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

              </Fade>
            </div>
          );
        } else if (sindex > -1) {
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
                  value={editstr}
                  size="small"
                  onChange={(event) => {
                    setEditstr(event.target.value);
                    setEdited(true);
                  }}
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
