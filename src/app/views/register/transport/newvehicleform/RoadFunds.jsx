import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import styled from '@emotion/styled'

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

function RoadFunds() {
    return (
        <Container>
            <Grid container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Textfield name="roadfundno" label="Road Fund Number" />
                    </Grid>
                    <Grid item xs={6}>
                        <DateTimePicker
                            name="dateofIssuance"
                            label="Date of Issurance "
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <DateTimePicker
                            name="expiryDate"
                            label="Expiry Date "
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield name="recievedFrom" label="Recieved From " />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography>Telephone Number</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield name="mobileNumber" label="Mobile Number" />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="officeNumber" label="Office Number" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Total Amount Recieved</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield
                            name="totAmtRecievedInNum"
                            label="In Number"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield
                            name="totamtrecievedinWords"
                            label="In Words "
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

RoadFunds.label = 'Road Fund'
RoadFunds.initialValues = {
    roadFundNo: '',
    dateofIssuance: '',
    expiryDate: '',
    recievedFrom: '',
    mobileNo: '',
    officeNumber: '',
    totAmtRecievedInWords: '',
    totAmtRecievedInNum: '',
}

RoadFunds.validationSchema = Yup.object().shape({
    roadFundNo: Yup.string().required('Required'),
    dateofIssuance: Yup.string().required('Required'),
    mobileNo: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    officeNumber: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    expiryDate: Yup.string().required('Required'),
    recievedFrom: Yup.string(),
    totAmtRecievedInWords: Yup.date().required('Required'),
    totAmtRecievedInNum: Yup.date().required('Required'),
})
export default RoadFunds
