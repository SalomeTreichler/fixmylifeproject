import React from "react";
import AppHeader from "../components/molecules/Header/Header";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import theme from "../config/Theme";
import Footer from "../components/molecules/Footer/Footer";
import TodoList from "../components/organisms/TodoList/TodoList";

function AppView(props) {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppHeader />
        <Grid container spacing={2} style={{ padding: theme.spacing(5) }}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <TodoList {...props} todos={props.todos.values}/>
          </Grid>
        </Grid>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default AppView;
