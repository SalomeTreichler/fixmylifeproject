import React from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import useStyle from "./TextFieldStyle"

/**
 * TextField uses the useField hook https://jaredpalmer.com/formik/docs/api/useField and should only be used inside of a Formik Form.
 *
 * All Props from the MaterialUI TextField are usable aswell https://material-ui.com/api/text-field/
 * (caution with helperText and error. They are used by validation)
 */
const TextField = props => {
  const classes = useStyle();

  return (
    <MuiTextField
      className={classes.textField}
      {...props}
    />
  );
};

TextField.defaultProps = {
  variant: "standard",
  fullWidth: true
};

TextField.propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default TextField;
