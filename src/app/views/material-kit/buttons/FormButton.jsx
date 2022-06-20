import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const FormButton = ({
  title,
  url,
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    if(url !== undefined && url != null)
    {
      window.location = url;
    }
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton}
      style={{ color: 'white' }}
    >
      {children}
      {title}
    </Button>
  );
};

export default FormButton;
