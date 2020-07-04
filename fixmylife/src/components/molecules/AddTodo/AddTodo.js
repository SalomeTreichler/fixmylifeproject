import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "../../atoms/TextField/TextField";
import TextButton from "../../atoms/TextButton/TextButton";

const AddTodo = () => {
  return (
    <Grid container direction="row" spacing={2} >
      <Grid item xs={9}>
        <TextField placeholder="New Todo"/>
      </Grid>
      <Grid item xs={3}>
        <TextButton text={"Add"} />
      </Grid>
    </Grid>
  );
};

export default AddTodo;
