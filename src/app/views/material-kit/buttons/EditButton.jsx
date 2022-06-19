import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export const EditButton = ({ url, state, search, ...otherProps }) => { 
    return (
        <Link to={url} style={{ color: '#66b1ad' }} state={state}>
            <EditIcon />
        </Link>
    );
};

