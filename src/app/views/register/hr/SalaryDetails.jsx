import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'
import itemlist from '../../../utils/data/BranchList.json'
import { Breadcrumb, SimpleCard } from 'app/components'
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

const INITIAL_FORM_STATE = {
    vehicleName: '',
    driverName: '',
    FuelMeasurment: '',
    AssignmentStatus: '',
    TrackUsage: '',
    StartDate: '',
    EndDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    driverName: Yup.string().required('Required'),
    FuelMeasurment: Yup.string().required('Required'),
    AssignmentStatus: Yup.string().required('Required'),
    TrackUsage: Yup.string(),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function SalaryDetails() {
    return (
        <Container>
            <Grid container>
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
                                            name="payment_mode"
                                            label="Payment Mode"
                                            options={Paymentmode}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="salary"
                                            label="Base Salary "
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Bank Details</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="bank_name"
                                            label="Bank Name "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="account_name"
                                            label="Account Name "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="account_no"
                                            label="Account No "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Allowance</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Select
                                            name="payment_mode"
                                            label="Allowance Type"
                                            options={allowance}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="amount"
                                            label="Amount "
                                        />
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>

                        {/* </div> */}
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SalaryDetails
