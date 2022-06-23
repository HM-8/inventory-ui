import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export const EditButton = ({ url, state, search, ...otherProps }) => {
    if (url === null) {
        return (
            <div style={{ color: '#66b1ad' }} state={state}>
                <EditIcon />
            </div>
        )
    } 
    else {
        return (
            <Link to={url} style={{ color: '#66b1ad' }} state={state}>
                <EditIcon />
            </Link>
        )
    }
}
