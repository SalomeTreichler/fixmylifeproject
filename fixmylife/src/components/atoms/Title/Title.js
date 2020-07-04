import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

/**
 * Title for components
 */
const Title = props => {
  const classes = makeStyles(theme => ({
    title: {
      paddingBottom: theme.spacing(2),
      fontWeight: 600
    }
  }))();

  return (
    <Typography variant="h4" className={classes.title}>
      {props.children}
    </Typography>
  );
};

export default Title;
