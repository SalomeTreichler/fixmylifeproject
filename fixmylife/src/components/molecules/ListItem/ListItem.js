import React from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import useStyle from "./ListItemStyle";

const ListItem = (props) => {
  const classes = useStyle();

  const { text, handleChange } = props;

  return (
    <Grid container direction="row" spacing={2} alignItems="center" className={classes.item}>
      <Grid item>
        <Checkbox onChange={handleChange} />
      </Grid>
      <Grid item>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default ListItem;
