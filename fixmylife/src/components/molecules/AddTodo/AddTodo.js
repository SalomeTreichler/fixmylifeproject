import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "../../atoms/TextField/TextField";
import TextButton from "../../atoms/TextButton/TextButton";

const AddTodo = () => {
  return (
    <Grid container direction="row" spacing={2} justify="center">
      <Grid item xs={10}>
        <TextField placeholder="New Todo" />
      </Grid>
      <Grid item xs={2}>
        <TextButton text={"Add"} />
      </Grid>
    </Grid>
  );
};

export default AddTodo;
