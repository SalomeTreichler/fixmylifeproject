import React from "react";
import useStyle from "./LineStyle";
import Divider from "@material-ui/core/Divider";

/**
 *
 * A line for seperating content
 *
 */

const Line = (props) => {
  const classes = useStyle();

  return <Divider className={classes.line} />;
};

export default Line;
