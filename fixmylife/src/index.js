import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./config/Theme.js";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
