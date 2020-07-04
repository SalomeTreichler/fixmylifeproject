import React from "react";
import "./App.css";
import AppHeader from "./components/molecules/Header/Header";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./config/Theme";

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppHeader />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
