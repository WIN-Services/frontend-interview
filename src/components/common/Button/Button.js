import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  const { children } = props;
  return (
    <Button
      sx={props.sx}
      color={props.color}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      size={props.size}
      type={props.type}
      variant={props.variant}
      startIcon={props.startIcon}
      onClick={props.onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
