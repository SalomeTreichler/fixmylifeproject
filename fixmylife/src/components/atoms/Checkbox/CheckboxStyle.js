import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  Checkbox: (props) => {
    let checkboxOpacity = 1;
    if (props.disabled) {
      checkboxOpacity = 0.4;
    }
    return {
      color: theme.palette.secondary.main,
      opacity: checkboxOpacity,
    };
  },
}));
