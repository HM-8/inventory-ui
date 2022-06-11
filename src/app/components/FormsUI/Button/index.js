import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { styled } from '@mui/system'

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    onClick: handleSubmit
  }
  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }))
  return (
    <StyledButton 
      {...configButton}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonWrapper;
