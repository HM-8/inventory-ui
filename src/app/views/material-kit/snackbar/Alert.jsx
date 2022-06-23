import React, { useState } from 'react'
import { styled } from '@mui/system'
import { amber, green } from '@mui/material/colors'
import { Alert, Button, Snackbar } from '@mui/material'

const ContentRoot = styled('div')(({ theme }) => ({
    '& .success': {
        backgroundColor: green[600],
    },
    '& .error': {
        backgroundColor: theme.palette.error.main,
    },
    '& .info': {
        backgroundColor: theme.palette.primary.main,
    },
    '& .warning': {
        backgroundColor: amber[700],
    },
    '& .icon': {
        fontSize: 20,
    },
    '& .iconVariant': {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    '& .message': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .margin': {
        margin: theme.spacing(1),
    },
}))

export default function AlertMe({severity, message}) {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(true)
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const configAlert = {
        onClick: handleClick
    };

    return(
        <ContentRoot>
            <Snackbar {...configAlert} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    {message}
                </Alert>
            </Snackbar>
        </ContentRoot>
    )
}