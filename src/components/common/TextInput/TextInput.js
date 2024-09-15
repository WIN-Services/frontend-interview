import React from "react";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  return (
    <TextField
      sx={props.sx}
      multiline={props.multiline}
      rows={props.rows}
      maxRows={props.maxRows}
      fullWidth={props.fullWidth}
      error={props.error}
      helperText={props.helperText}
      label={props.label}
      margin={props.margin}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      type={props.type}
      value={props.value}
      variant={props.variant}
      InputProps={props.InputProps}
      style={props.style}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onKeyDown={props.onKeyDown}
    
    />
  );
};

export default TextInput;
