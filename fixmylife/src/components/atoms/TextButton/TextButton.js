import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import theme from "../../../config/Theme";

/**
 *
 * Our default TextButton
 *
 */

const TextButton = (props) => {

  let opacity = 1;

  if (props.disabled) {
    opacity = 0.4;
  }

  return (
    <Button
      {...props}
      variant="contained"
      style={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
        opacity: opacity,
        borderRadius: 0,
      }}
    >
      {props.text}
    </Button>
  );
};

TextButton.defaultProps = {
  text: "Text",
};

TextButton.propTypes = {
  /**
   * Define The Text on the Button
   */
  text: PropTypes.string.isRequired,
  /**
   * Choose a Button type to define the colors
   */
};

export default TextButton;
