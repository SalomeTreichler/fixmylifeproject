import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "../../atoms/TextField/TextField";
import TextButton from "../../atoms/TextButton/TextButton";
import Sheet from "../../atoms/Sheet/Sheet";
import Title from "../../atoms/Title/Title";
import Line from "../../atoms/Line/Line";
import AddTodo from "../../molecules/AddTodo/AddTodo";

const TodoList = () => {
  return (
    <Sheet>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item>
          <Title>Todos</Title>
        </Grid>
        <Line />
        <Grid item>
          <AddTodo />
        </Grid>
      </Grid>
    </Sheet>
  );
};

export default TodoList;
