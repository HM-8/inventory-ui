import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import styled from '@emotion/styled'
import Paymentmode from '../../../utils/data/paymentmode.json'
import allowance from '../../../utils/data/allowance.json'

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

const SalaryDetails = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Select
                        name="payment_mode"
                        label="Payment modes"
                        options={Paymentmode}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Bank Details</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="bank_name" label="Bank Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="account_name" label="Account Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="account_no" label="Account No " />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="salary" label="Base Salary " />
                </Grid>

                <Grid item xs={12}>
                    <Typography>Allowance</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="travel_allowence"
                        label="Travel Allowance fee "
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="position_allowance"
                        label="Position Allowance fee "
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="house_allownace"
                        label="House Allowance fee "
                    />
                </Grid>

                <Grid item xs={6}>
                    <Textfield
                        name="livin_cost"
                        label="Living Cost Adjustment fee "
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography>Other</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="alllowanc_name" label="Allowance name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="amount" label="Amount " />
                </Grid>
            </Grid>
        </Container>
    )
}

SalaryDetails.label = 'Contact Information'
SalaryDetails.initialValues = {
    payment_mode: '',
    bank_name: '',
    account_name: '',
    account_no: '',
    salary: '',
    travel_allowence: '',
    position_allowance: '',
    livin_cost: '',
    alllowanc_name: '',
    amount: '',
}
SalaryDetails.validationSchema = Yup.object().shape({
    payment_mode: Yup.string().required('Required'),
    bank_name: Yup.string().required('Required'),
    account_name: Yup.string().required('Required'),
    account_no: Yup.string().required('Required'),
    salary: Yup.string(),
    travel_allowence: Yup.date().required('Required'),
    position_allowance: Yup.date().required('Required'),
    livin_cost: Yup.date().required('Required'),
    alllowanc_name: Yup.date().required('Required'),
    amount: Yup.date().required('Required'),
})

export default SalaryDetails
