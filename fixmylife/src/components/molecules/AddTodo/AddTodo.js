import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "../../atoms/TextField/TextField";
import TextButton from "../../atoms/TextButton/TextButton";
import useStyle from "./AddTodoStyle";

const AddTodo = (props) => {
  const classes = useStyle();

  return (
    <Grid container direction="row" spacing={2} className={classes.add}>
      <Grid item xs={9}>
        <TextField placeholder="New Todo" />
      </Grid>
      <Grid item xs={3}>
        <TextButton text={"Add"} onClick={props.AddTodo()} />
      </Grid>
    </Grid>
  );
};

export default AddTodo;
