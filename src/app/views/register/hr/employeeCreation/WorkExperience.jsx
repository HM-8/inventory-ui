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
                    <Textfield name="companyName" label="Company Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="companyWebsite" label="Website" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="companyEmail" label="Company Email" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield
                        name="personalEmail"
                        label="Person of Contact (Email)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="previousDesignation"
                        label="Previous Designation "
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
Experience.label = 'Work Experience'
Experience.initialValues = {
    companyName: '',
    companyWebsite: '',
    companyEmail: '',
    personalEmail: '',
    previousDesignation: '',
}
Experience.validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Required'),
    companyWebsite: Yup.string().required('Required'),
    companyEmail: Yup.string().email().required('Required'),
    personalEmail: Yup.string().email().required('Required'),
    previousDesignation: Yup.string().required('Required'),
})

export default Experience
