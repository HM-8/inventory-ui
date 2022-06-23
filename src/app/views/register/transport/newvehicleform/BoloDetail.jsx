import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
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
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="receiptNo"
                                            label="Receipt Number "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="plateNo"
                                            label="Plate Number"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="inspectionDate"
                                            label="Inspection Date "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="expiryDate"
                                            label="Expiry Date "
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
