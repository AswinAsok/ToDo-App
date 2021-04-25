import React from "react";
import "./Display.css";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const defaultProps = {
  m: 1,
  style: { width: "18rem", height: "5rem" },
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

function Display({ Tasks_array, Task, key, setTasks_array }) {
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
                <Box className="display-box" borderRadius={9} {...defaultProps}>
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
                    >
                      Delete
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" className={classes.buttonedit}>
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
