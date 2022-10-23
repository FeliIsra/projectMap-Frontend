import React from 'react';
import { TextField } from '@mui/material';

const Input = (props) => {
  const { placeholder, field, type, variant, size, hiddenLabel, inputProps } =
    props;

  return (
    <TextField
      {...field}
      placeholder={placeholder}
      type={type}
      variant={variant}
      size={size}
      hiddenLabel={hiddenLabel}
      inputProps={inputProps}
    />
  );
};

export default Input;
