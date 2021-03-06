import React, { useState } from "react";
import "./Display.css";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const defaultProps = {
  m: 1,
  style: { width: "18rem" },
};

const useStyles = makeStyles((theme) => ({
  buttondelete: {
    backgroundColor: "#30BCED",
    color: "#FFFAFF",
    "&:hover": {
      backgroundColor: "#30BCED",
    },
    "&:disabled": {
      backgroundColor: "#30BCED",
    },
    width: "5em",
    margin: "5px",
    fontSize: "0.75em",
  },
  buttonedit: {
    backgroundColor: "#30BCED",
    color: "#FFFAFF",
    "&:hover": {
      backgroundColor: "#30BCED",
    },
    "&:disabled": {
      backgroundColor: "#30BCED",
    },
    width: "5em",
    margin: "5px",
    fontSize: "0.75em",
  },
}));

function Display({
  Tasks_array,
  Task,
  index,
  setSIndex,
  sindex,
  edit,
  setEdit,
  setTasks_array,

  editstr,
  setEditstr,

  edited,
  setEdited,
}) {
  const classes = useStyles();

  return (
    <div>
      {(() => {
        if (Tasks_array.length > 0) {
          return (
            <div>
              <br></br>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Box boxShadow={3} className="display-box" borderRadius={9} {...defaultProps}>
                  <div className="box-elements">{Task}</div>
                </Box>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div>
                    <Button
                      variant="contained"
                      className={classes.buttondelete}
                      onClick={() => {
                        if (!edit) {
                          if (Tasks_array.length === 1) {
                            localStorage.removeItem("Todos");
                          }

                          setTasks_array(
                            Tasks_array.filter(function (task) {
                              return task !== Tasks_array[index];
                            })
                          );
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        setEdit(true);
                        setSIndex(index);
                        setEditstr(Tasks_array[index]);
                      }}
                      variant="contained"
                      className={classes.buttonedit}
                    >
                      Edit
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <br></br>
              <Divider />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Display;
