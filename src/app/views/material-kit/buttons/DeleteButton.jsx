import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBranchInfo } from 'app/redux/actions/BranchAction'
import { useDispatch } from 'react-redux';

export const DeleteButton = ({ id, ...otherProps }) => {
    console.log("delete id", id);
    
    const dispatch = useDispatch();

    const deleteEntry = (id) => {
        dispatch(deleteBranchInfo(id))
    };

    const handleSubmit = () => {
        deleteEntry(id);
    };
    
    const configButton = {
        onClick: handleSubmit
    };

    return <DeleteIcon {...configButton} style={{ color: 'red', cursor: 'pointer' }}></DeleteIcon>;
};


