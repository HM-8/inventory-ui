import { Alert, Grid } from '@mui/material'
import React from 'react'
//import useAuth from 'app/hooks/useAuth'
import { Box, styled } from '@mui/system'
import Login from '../login/JwtLogin'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const JWTRoot = styled(JustifyBox)(() => ({
    background: '#1A2038',
    minHeight: '100% !important',
    '& .card': {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))
const JwtLogout = () => {
    const ContentRoot = styled('div')(({ theme }) => ({
        '& .success': {
            borderRadius: 12,
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

    return (
        <>
            <JWTRoot>
                <Grid container direction="column" item xs={6}>
                    <Grid item>
                        <ContentRoot>
                            <Alert
                                sx={{ m: 2, backgroundColor: '#ffffff', color: '#000000', borderRadius: 12 }}
                                severity="success"
                                variant="filled"
                            >
                                You have successfully signed out! Use the form
                                down below to sign back in.
                            </Alert>
                        </ContentRoot>
                    </Grid>
                    <Grid item>
                        <Login />
                    </Grid>
                </Grid>
            </JWTRoot>
        </>
    )
}

export default JwtLogout
