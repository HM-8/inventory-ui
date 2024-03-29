import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { useLocation, useNavigate } from 'react-router-dom'
import { Span } from 'app/components/Typography'
import { Card, Grid, Button } from '@mui/material'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import axios from 'axios'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
    width: '100%',
}))

const ForgotPasswordRoot = styled(JustifyBox)(() => ({
    background: '#1A2038',
    minHeight: '100vh !important',
    '& .card': {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({})
    const search = useLocation().search
    const token = new URLSearchParams(search).get('token')

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleFormSubmit = (event) => {
        console.log(state)
        axios
            .post('http://localhost:4040/v1/auth/reset-password', state, {
                params: { token: token },
            })
            .then((res) => {
                console.log('posted')
            })
    }

    let { password } = state

    return (
        <ForgotPasswordRoot>
            <Card className="card">
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <JustifyBox p={4} height="100%">
                            <IMG
                                src="/assets/images/illustrations/dreamer.svg"
                                alt=""
                            />
                        </JustifyBox>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <ContentBox>
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    variant="outlined"
                                    label="New Password"
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    size="small"
                                    value={password || ''}
                                    validators={['required', 'isPassword']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <FlexBox>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Reset Password
                                    </Button>
                                    <Span sx={{ mr: 1, ml: '16px' }}>or</Span>
                                    <Button
                                        sx={{ textTransform: 'capitalize' }}
                                        onClick={() =>
                                            navigate('/session/signin')
                                        }
                                    >
                                        Sign in
                                    </Button>
                                </FlexBox>
                            </ValidatorForm>
                        </ContentBox>
                    </Grid>
                </Grid>
            </Card>
        </ForgotPasswordRoot>
    )
}

export default ForgotPassword
