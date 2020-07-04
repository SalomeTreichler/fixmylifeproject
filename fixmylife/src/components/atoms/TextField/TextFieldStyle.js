import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  textField: {
    "& label.Mui-focused": {
      color: theme.palette.primary.dark,
    },
  },
}));
