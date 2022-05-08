import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { useField, useFormikContext } from 'formik'

const DropDown = ({ options, ...otherProps }) => {
    const configSelect = {
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
    }

    return (
        <TextField {...configSelect}>
            {Object.keys(options).map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}

export default DropDown
