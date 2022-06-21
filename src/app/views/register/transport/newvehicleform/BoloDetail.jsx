import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

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
function BoloDetails() {
    return (
        <Container>
            <Grid container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Textfield name="receiptNo" label="Receipt Number " />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield name="plateNo" label="Plate Number" />
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
            </Grid>
        </Container>
    )
}

BoloDetails.label = 'Bolo Details';
BoloDetails.initialValues = {
    receiptNo: '',
    plateNo: '',
    inspectionDate: '',
    expiryDate: '',
};
Yup.object().shape({
    inspectionDate: Yup.string().required('Required'),
    receiptNo: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    plateNo: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    expiryDate: Yup.string().required('Required'),
})
export default BoloDetails
