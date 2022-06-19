import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export const EditButton = ({ url, item, ...otherProps }) => { 
    console.log("item", item); 
    return (
        <Link to={url} style={{ color: '#66b1ad' }} state={item}>
            <EditIcon />
        </Link>
    );
};

