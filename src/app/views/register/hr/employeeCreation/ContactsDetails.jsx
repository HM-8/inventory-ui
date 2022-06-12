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
    roadFundNo: '',
    dateofIssuance: '',
    timeofIssuance: '',
    expiryDate: '',
    recievedFrom: '',
    city: '',
    subcity: '',
    wereda: '',
    kebele: '',
    houseNo: '',
    areaCode: '',
    mobileNo: '',
    totAmtRecievedInWords: '',
    totAmtRecievedInNum: '',
    collectionMode: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    numberOfCylinders: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    horsepower: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    cubic_capacity: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    AssignmentStatus: Yup.string().required('Required'),
    yearManufactured: Yup.string(),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function BoloDetails() {
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
                                <Grid item xs={12}>
                                        <Typography>Telephone</Typography>
                                    </Grid>
                                <Grid item xs={6}>
                                        <Textfield
                                            name="houseno"
                                            label="House No"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="mobile"
                                            label="Mobile No"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Address</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="firstName"
                                            label="House No"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="lastName"
                                            label="Kebele"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="email"
                                            label="Wereda"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="phone" label="City" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="phone"
                                            label="Subcity"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="phone"
                                            label="Area name "
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Email</Typography>
                                    </Grid>
                                <Grid item xs={6}>
                                        <Textfield
                                            name="p_email"
                                            label="Personal Email"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="c_email"
                                            label="Company Email"
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

export default BoloDetails
