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
import InsurnaceType from '../../../../utils/data/InsurnaceType.json'
import Upload from '../../../../components/FormsUI/fileupload'
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
                                        <Select
                                            name="insurance_type"
                                            label="Insurance Type"
                                            options={InsurnaceType}
                                        />
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Healthinsuranceprovider "
                                            label="Health insurance provider  "
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Insurance Agents</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="first_name"
                                            label="First Name "
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Textfield
                                            name="middle_name"
                                            label="Middle Name "
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="last_name"
                                            label="Last Name "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Telephone</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="MobileNumber"
                                            label="Mobile No "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="OfficeNumber"
                                            label="Office No "
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="insuranceNo"
                                            label="Health insurance No "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                            <Upload
                                                name="upload"
                                                label="Upload Document "
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <Typography>Other</Typography>
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
