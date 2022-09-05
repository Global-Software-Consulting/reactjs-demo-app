import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Textfield = ({ label, sx, name, type, value, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      margin="normal"
      fullWidth
      label={label}
      sx={sx}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textfield;

Textfield.propTypes = {
  label: PropTypes.string,
  sx: PropTypes.any,
  value: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
