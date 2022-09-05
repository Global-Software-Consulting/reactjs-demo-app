import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Text = ({ value, sx, variant, component, mode }) => {
  return (
    <Typography variant={variant} component={component} sx={sx}>
      {mode}
      {value}
    </Typography>
  );
};

export default Text;

Text.propTypes = {
  sx: PropTypes.any,
  value: PropTypes.any,
  variant: PropTypes.string,
  component: PropTypes.string,
  mode: PropTypes.string,
};
