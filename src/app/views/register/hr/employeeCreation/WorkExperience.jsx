import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
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

const Experience = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Textfield name="name" label="Company Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="website" label="Website" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="email" label="Company Email" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield
                        name="previous_salary"
                        label="Person of Contact (Email)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="previous_designation"
                        label="Previous Designation "
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
Experience.label = 'Work Experience'
Experience.initialValues = {
    name: '',
    website: '',
    email: '',
    previous_designation: '',
    previous_salary: '',
}
Experience.validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    website: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    previous_salary: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    previous_designation: Yup.string().required('Required'),
   })

export default Experience
