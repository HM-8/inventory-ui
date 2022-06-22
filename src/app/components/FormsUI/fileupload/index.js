import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    type:"file",
    fullWidth: true,
    variant: 'standard',
    InputLabelProps:{ shrink: true }
    // defaultValue= ' ',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield}/>
  );
};

export default TextfieldWrapper;
