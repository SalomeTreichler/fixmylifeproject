import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  sheet: (props) => {
    return {
      borderRadius: 0,
      padding: theme.spacing(3),
      backgroundColor:
        props.variant === "light"
          ? theme.palette.common.white
          : theme.palette.secondary.main,
      color:
        props.variant === "light"
          ? theme.palette.text.primary
          : theme.palette.common.white,
    };
  },
}));
