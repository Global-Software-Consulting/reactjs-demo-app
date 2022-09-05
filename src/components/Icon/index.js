import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";

const Icon = ({
  sx,
  value,
  onClick,
  size,
  ariaLabel,
  ariaControls,
  ariaHaspopup,
}) => {
  return (
    <IconButton
      sx={sx}
      onClick={onClick}
      color="inherit"
      size={size}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
    >
      {value}
    </IconButton>
  );
};

export default Icon;

Icon.propTypes = {
  sx: PropTypes.any,
  value: PropTypes.any,
  onClick: PropTypes.any,
  size: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaHaspopup: PropTypes.string,
};
