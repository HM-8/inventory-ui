import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useField,useFormikContext } from 'formik';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const DateTimePicker = ({
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const configDateTimePicker = {
    ...field,
    ...props,

    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }
  return (
    // <TextField
    //   {...configDateTimePicker}
    // />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        renderInput={(configDateTimePicker) => (
          <TextField
            {...configDateTimePicker}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
