import React from 'react'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import styled from '@emotion/styled'

const buttonText = 'Save'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
function ContactsDetails(props) {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Telephone</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield name="houseno" label="House No" />
                        </Grid>

                        <Grid item xs={6}>
                            <Textfield name="mobile" label="Mobile No" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Address</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield name="firstName" label="First Name" />
                        </Grid>

                        <Grid item xs={6}>
                            <Textfield name="lastName" label="last Name" />
                        </Grid>

                        <Grid item xs={6}>
                            <Textfield name="email" label="Email" />
                        </Grid>

                        <Grid item xs={6}>
                            <Textfield name="city" label="City" />
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield name="Subcity" label="Subcity" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Email</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield name="p_email" label="Personal Email" />
                        </Grid>

                        <Grid item xs={6}>
                            <Textfield name="c_email" label="Company Email" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
ContactsDetails.label = 'Contacts Details'
ContactsDetails.initialValues = {
    firstName: '',
    lastName: '',
}
export default ContactsDetails
