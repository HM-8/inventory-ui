import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid,
    Typography,
} from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import countries from '../../../../utils/data/countries.json'

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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    arrivealDate: '',
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

function PurchaseOrder() {

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Transaction', path: '/dashboard' },
                        { name: 'Purchase Order' },
                    ]}
                />
            </div>
            <SimpleCard title="Purchase Order">
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
                                                name="country"
                                                label="Item Name "
                                                options={countries}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Item Variant "
                                                options={countries}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="firstName"
                                                label="Quantity "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Description "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                            supplier
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine1"
                                                label="Company Tel No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Location</Typography>
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
                                            <Textfield
                                                name="phone"
                                                label="City"
                                            />
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

                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Price "
                                                options={countries}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Check Received by
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                        <Textfield
                                                name="addressLine2"
                                                label="Signature"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Check Approved By
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                        <Textfield
                                                name="addressLine2"
                                                label="Signature"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
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

export default PurchaseOrder
