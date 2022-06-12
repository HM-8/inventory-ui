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
        city: Yup.string().required('Required'),
        subcity: Yup.string(),
        areaCode: Yup.date().required('Required'),
        houseNo: Yup.date().required('Required'),
        kebele: Yup.string().required('Required'),
        wereda: Yup.string(),
        subcity: Yup.date().required('Required'),
        city: Yup.date().required('Required'),
        nameofInsured: Yup.string().required('Required'),
        subcity: Yup.string(),
        areaCode: Yup.date().required('Required'),
        houseNo: Yup.date().required('Required'),
        kebele: Yup.string().required('Required'),
        wereda: Yup.string(),
        subcity: Yup.date().required('Required'),
        city: Yup.date().required('Required'),
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
                                    <Grid item xs={12}>
                                        <Typography>Insured Details</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="nameofInsured"
                                            label="Name of Insured "
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Address</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="city" label="City" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="subcity"
                                            label="Subcity"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="kebele"
                                            label="Kebele"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="wereda"
                                            label="Wereda"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="houseNo"
                                            label="House No"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="areaCode"
                                            label="Area Code "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
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
                                            name="conditionsSubjectedTowhichThePolicyisIssued"
                                            label="Conditions Subjected to which the policy is Issued"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="nameofInsurer"
                                            label="Name of Insurer "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="personsEntitledtouse"
                                            label="Persons entitled to Drive "
                                        />
                                    </Grid>
                                   

                                    <Grid item xs={12}>
                                        <Typography>Insurer Address</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="Icity" label="City" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Isubcity"
                                            label="Subcity"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Ikebele"
                                            label="Kebele"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Iwereda"
                                            label="Wereda"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="IhouseNo"
                                            label="House No"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="IareaCode"
                                            label="Area Code "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Telephone Number</Typography>
                                    </Grid>
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
                                    <Grid item xs={12}>
                                        <Typography>Insurance Date</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="IDFrom"
                                            label="From "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="IDTo"
                                            label="To"
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
