import React from "react";
import { Grid } from "@material-ui/core";
import Sheet from "../../atoms/Sheet/Sheet";
import Title from "../../atoms/Title/Title";
import Line from "../../atoms/Line/Line";
import AddTodo from "../../molecules/AddTodo/AddTodo";
import ListItem from "../../molecules/ListItem/ListItem";

const TodoList = (props) => {
  return (
    <Sheet>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Title>Todos</Title>
        <Grid container direction="column" alignItems="flex-start">
          <Line />
          <Grid item>
            {[...props.todos.values()].map((todo) => (
              <ListItem
                handleChange={props.deleteTodo(todo.id)}
                key={todo.id}
                text={todo.text}
              ></ListItem>
            ))}
          </Grid>
          <Line />
          <AddTodo {...props} />
        </Grid>
      </Grid>
    </Sheet>
  );
};

export default TodoList;
