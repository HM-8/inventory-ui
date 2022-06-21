import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import itemlist from '../../../../utils/data/BranchList.json'
import { Breadcrumb, SimpleCard } from 'app/components'
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

const INITIAL_FORM_STATE = {
    insuranceCertificateNumber: '',
    dateofIssuance: '',
    nameofInsured: '',
    city: '',
    subcity: '',
    wereda: '',
    kebele: '',
    houseNo: '',
    areaCode: '',
    insurance_Policy_No: '',
    IDFrom: '',
    IDTo: '',
    conditionsSubjectedTowhichThePolicyisIssued: '',
    personsEntitledtouse: '',
    nameofInsurer: '',
    Icity: '',
    Isubcity: '',
    Iwereda: '',
    Ikebele: '',
    IhouseNo: '',
    IareaCode: '',
    personalTel: '',
    companyTel: '',
}

const FORM_VALIDATION = Yup.object().shape({
    insuranceCertificateNumber: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    nameofInsured: Yup.number()
        .integer()
        .typeError('Please enter a valid number')
        .required('Required'),
    horsepower: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    cubic_capacity: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    nameofInsured: Yup.string().required('Required'),
})

function InsuranceDetail() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE,
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="insuranceCertificateNumber"
                                            label="Insurance Certificate Number "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="dateofIssuance"
                                            label="Date of Issurance "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="nameofInsured"
                                            label="Name of Insured "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="insurance_Policy_No"
                                            label="Insurance Policy Number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Insurer Details</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="nameofInsurer"
                                            label="Name of Insurer "
                                        />
                                    </Grid>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Personal Tel"
                                            label="personalTel "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="companyTel"
                                            label="Company's Tel "
                                        />
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default InsuranceDetail
