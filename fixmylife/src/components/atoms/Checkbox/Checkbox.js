import React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import useStyle from "./CheckboxStyle";

/**
 *
 * A simple Checkbox, that you can use for checking off todos
 * 
 */

const Checkbox = props => {
  const classes = useStyle({...props });

  return (
    <MuiCheckbox
      {...props}
      className={classes.Checkbox}
    />
  );
}


Checkbox.propTypes = {
  /**
   *Define if the Checkbox is disabled
   */
  disabled: PropTypes.oneOf([false, true]),
  /**
   * Set the color of the checkbox
   */
};

export default Checkbox;