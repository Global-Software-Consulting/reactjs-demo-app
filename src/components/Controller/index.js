import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const Control = ({ name, control, rules, type, label, error, helperText }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          margin="normal"
          fullWidth
          name={name}
          type={type}
          label={label}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
};

export default Control;

Control.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  rules: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.any,
  error: PropTypes.bool,
  helperText: PropTypes.any,
};
