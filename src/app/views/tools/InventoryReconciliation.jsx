import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../components/FormsUI/Textfield'
import Select from '../../components/FormsUI/Select'
import DateTimePicker from '../../components/FormsUI/DataTimePicker'
import Button from '../../components/FormsUI/Button/index'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

import itemlist from '../../utils/data/itemlist.json'
import branch from '../../utils/data/BranchList.json'

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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    code: '',
    city: '',
    state: '',
    country: '',
    reportTo: '',
    reportDate: '',
    departureDate: '',
    message: '',
    termsOfService: false,
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email.').required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    arrivealDate: Yup.date().required('Required'),
    departureDate: Yup.date().required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
})

function Reconciliation() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Tools', path: '/dashboard' },
                        { name: 'Reconciliation' },
                    ]}
                />
            </div>
            <SimpleCard title="Reconciliation">
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
                                                name="country"
                                                label="Item name "
                                                options={itemlist}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Branch"
                                                options={branch}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Counted quantity{' '}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="firstName"
                                                label="Item name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Qty"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Posting </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="phone"
                                                label="Time"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="departureDate"
                                                label="Date"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Report </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="reportDate"
                                                label="Date"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="reportTo"
                                                label="Report to"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="code"
                                                label="Report Code"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>Submit Form</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Reconciliation
