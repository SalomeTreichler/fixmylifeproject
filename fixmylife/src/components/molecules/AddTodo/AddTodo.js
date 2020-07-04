import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import TextButton from "../../atoms/TextButton/TextButton";
import useStyle from "./AddTodoStyle";
import TextField from "../../atoms/TextField/TextField";

const AddTodo = (props) => {
  const classes = useStyle();

  const [todo, setTodo] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAdd(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" alignItems="center" spacing={2} className={classes.add}>
        <Grid item xs={9}>
          <TextField
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="New Todo"
            name="todo"
          />
        </Grid>
        <Grid item xs={3}>
          <TextButton type="submit" text={"Add"} />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
