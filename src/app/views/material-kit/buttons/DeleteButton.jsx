import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

export const DeleteButton = ({ action, ...otherProps }) => {    
    const dispatch = useDispatch();

    const deleteEntry = (action) => {
        dispatch(action)
    };

    const handleSubmit = () => {
        deleteEntry(action);
    };
    
    const configButton = {
        onClick: handleSubmit
    };

    return <DeleteIcon {...configButton} style={{ color: 'red', cursor: 'pointer' }}></DeleteIcon>;
};


