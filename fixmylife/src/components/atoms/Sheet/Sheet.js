import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import useStyle from "./SheetStyle";

/**
 * A styled container.
 */

const Sheet = (props) => {
  const classes = useStyle(props);

  return <Paper className={classes.sheet}>{props.children}</Paper>;
};

Sheet.defaultProps = {
  variant: "light",
};

Sheet.propTypes = {
  variant: PropTypes.oneOf(["light", "dark"]),
};

export default Sheet;
