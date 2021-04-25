import React from "react";
import "./Display.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const defaultProps = {
  m: 1,
  style: { width: "18rem", height: "5rem" },
};

function Display({ Tasks_array, Task, key, setTasks_array }) {
  return (
    <div>
      {(() => {
        if (Tasks_array.length > 0) {
          return (
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Box className="display-box" borderRadius={9} {...defaultProps}>
                  <div className="box-elements">
                    {Task}
                  </div>
                </Box>
              </Grid>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Display;
