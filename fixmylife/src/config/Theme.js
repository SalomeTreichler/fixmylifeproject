import { createMuiTheme } from "@material-ui/core";

const noaTheme = createMuiTheme({
  palette: {
    primary: {
      dark: "#EFC256",
      main: "#FFDD8C",
      light: "#FFEEC5",
    },
    secondary: {
      main: "#D6D6D6",
      light: "#ffffff",
      dark: "#000000",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#353535",
      disabled: "#d9d9d9",
      hint: "#C4C4C4",
    },
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
  },
});

console.log(noaTheme);

export default noaTheme;
