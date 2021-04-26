import React, { useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./InputForm.css";
import Divider from "@material-ui/core/Divider";
import Form from "../Form/Form";
import Display from "../Display/Display";
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  buttonadd: {
    backgroundColor: "#30BCED",
    color: "#FFFAFF",
    "&:hover": {
      backgroundColor: "#30BCED",
    },
    "&:disabled": {
      backgroundColor: "#30BCED",
    },
    marginTop: "20px",
    width: "10em",
  },
}));

const InputForm = () => {
  const classes = useStyles();

  const [clicked, setClicked] = useState(false);
  const [Task, setTask] = useState("");
  const [Tasks_array, setTasks_array] = useState([]);
  const [sindex, setSIndex] = useState(-1);
  const [edit, setEdit] = useState(false);
  const [editstr, setEditstr] = useState("");
  const [edited, setEdited] = useState(false);
  

  useEffect(() => {
    var check = false;
    if (localStorage.getItem("Todos") === null) {
      localStorage.setItem("Todos", JSON.stringify(Tasks_array));
      check = true;
    } else if (
      Tasks_array.length === 0 &&
      JSON.parse(localStorage.getItem("Todos")).length > 0
    ) {
      setTasks_array(JSON.parse(localStorage.getItem("Todos")));
    }

    if (Tasks_array.length > 0) {
      localStorage.setItem("Todos", JSON.stringify(Tasks_array));
    }
  }, [Tasks_array, editstr]);

  const update = () => {
    if (edited && edit && sindex !== -1 && editstr.length > 0) {
      Tasks_array[sindex] = editstr;
      console.log("Hello123");
      setEditstr("");
      setEdit(false);
      setSIndex(-1);
      setClicked(false);
    }
  };

  return (
    <div className="input-container">
      <Grid container direction="column" justify="center" alignItems="center">
        <div>
          <Button
            onClick={() => {
              setClicked(!clicked);
              if (edited) {
                update();
              }
            }}
            variant="contained"
            className={classes.buttonadd}
          >
            {(() => {
              if (edit) {
                return ("Edit Task");
              }
              else{
                return ("Add Task")
              }
            })()}
          </Button>
        </div>
      </Grid>
      {(() => {
        if (clicked) {
          return (
            <Form
              setTask={setTask}
              setTasks_array={setTasks_array}
              Tasks_array={Tasks_array}
              sindex={sindex}
              setSIndex={setSIndex}
              editstr={editstr}
              setEditstr={setEditstr}
              setEdited={setEdited}
              clicked={clicked}
            />
          );
        }

        if (!clicked && Task.length > 0) {
          setTasks_array((Tasks_array) => Tasks_array.concat(Task));
          setTask("");
        }

        if (edit && sindex !== -1) {
          return (
            <Form
              setTask={setTask}
              setTasks_array={setTasks_array}
              Tasks_array={Tasks_array}
              sindex={sindex}
              setSIndex={setSIndex}
              editstr={editstr}
              setEditstr={setEditstr}
              setEdited={setEdited}
            />
          );
        }
      })()}

      <br></br>
      <Divider />

      {Tasks_array.map((Task, index) => {
        return (
          <Display
            Tasks_array={Tasks_array}
            Task={Task}
            index={index}
            setSIndex={setSIndex}
            sindex={index}
            edit={edit}
            setEdit={setEdit}
            setTasks_array={setTasks_array}
            editstr={editstr}
            setEditstr={setEditstr}
            edited={edited}
            setEdited={setEdited}
          />
        );
      })}
    </div>
  );
};

export default InputForm;
