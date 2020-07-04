import React from "react";
import AppHeader from "../components/molecules/Header/Header";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import theme from "../config/Theme";
import Sheet from "../components/atoms/Sheet/Sheet";
import AddTodo from "../components/molecules/AddTodo/AddTodo";

function AppView() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppHeader />
        <Grid container spacing={2} style={{padding:theme.spacing(5)}}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <Sheet>
              <AddTodo />
            </Sheet>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default AppView;
