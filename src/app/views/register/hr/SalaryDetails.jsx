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
                    <Textfield name="bname" label="Bank Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="bAccountName" label="Account Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="baccountNumber" label="Account Name " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="salary" label="Base Salary " />
                </Grid>

                <Grid item xs={12}>
                    <Typography>Allowance</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="atype"
                        label="Type "
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="aamount"
                        label="Amount"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

SalaryDetails.label = 'Salary Details'
SalaryDetails.initialValues = {
    paymentMode:'',
    bname:'',
    bAccountName:'',
    baccountNumber:'',
    salary:'',
    atype:'',
    aamount:'',
}
SalaryDetails.validationSchema = Yup.object().shape({
    payment_mode: Yup.string().required('Required'),
    bname: Yup.string().required('Required'),
    bAccountName: Yup.string().required('Required'),
    baccountNumber: Yup.number().required(),
    salary: Yup.number().required(),
    atype: Yup.string().required('Required'),
    aamount: Yup.number().required(),
})

export default SalaryDetails
