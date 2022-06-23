import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Vehicle from '../../../utils/data/vehicleNameDD.json'

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
    '& .font': {
        fontWeight: 'bold',
        fontSize: '16px',
    },
}))

const INITIAL_FORM_STATE = {
    platenumber: '',
    Vendor: '',
    platenumber: '',
    subcategory: '',
    variant: '',
    uom: '',
    qty: '',
    discount: '',
}

const FORM_VALIDATION = Yup.object().shape({
    platenumber: Yup.string().required('Required'),
    Vendor: Yup.string().required('Required'),
    platenumber: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
        .required('Required'),
    coupon: Yup.string(),
    driver: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    departureDate: Yup.date().required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
})

function NewFuelEntry() {

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Fuel Entry List',
                            path: '/logistic/fuel-entry',
                        },
                        { name: 'New Fuel Entry' },
                    ]}
                />
            </div>
            <SimpleCard title="New Fuel Entry">
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
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="platenumber"
                                                label="Plate Number"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="date"
                                                label="Date"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Select
                                                name="Vendor"
                                                label="Vendor"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="platenumber"
                                                label="Price unit"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="coupon"
                                                label="Coupon Number"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Driver</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="driver"
                                                label="Coupon Number"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>ADD</Button>
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

export default NewFuelEntry
