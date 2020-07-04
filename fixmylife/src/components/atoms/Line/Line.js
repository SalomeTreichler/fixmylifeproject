import React from "react";
import useStyle from "./LineStyle";

/**
 *
 * A line for seperating content
 *
 */

const Line = (props) => {
  const classes = useStyle();

  return <hr className={classes.line} />;
};

export default Line;
