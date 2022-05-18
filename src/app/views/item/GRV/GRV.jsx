import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, TextField, Typography } from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'
import Button from '../../../components/FormsUI/Button/index'
import Branches from '../../../utils/data/BranchList.json'
import Suppliers from '../../../utils/data/Supplierlist.json'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import attribute from '../../../utils/data/AttributeLIst.json'
import category from '../../../utils/data/categorylist.json'
import subcategory from '../../../utils/data/subcategory.json'

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

function Products() {
    // const classes = useStyles();
    const [state, setstate] = useState({
        date: new Date(),
    })
    const { quantity, date } = state
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
                        { name: 'GRV' },
                    ]}
                />
            </div>
            <SimpleCard title="GRV Form">
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
                                                label="Branch "
                                                options={Branches}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Item code"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="email"
                                                label="GRV No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Suppliers "
                                                options={Suppliers}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="arrivealDate"
                                                label="Date"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine1"
                                                label="Contact No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Invoice No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Item Details
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="city"
                                                label="Item name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="state"
                                                label="Description"
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                            <TextField
                                                sx={{ mb: 4 }}
                                                label="Quantity"
                                                // onChange={handleChange}
                                                type="number"
                                                name="quantity"
                                                value={quantity || ''}
                                                validators={[
                                                    'required',
                                                    'minStringLength:16',
                                                    'maxStringLength: 16',
                                                ]}
                                                errorMessages={[
                                                    'this field is required',
                                                ]}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Item Variant
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Item Attribute"
                                                options={attribute}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Options"
                                                options={category}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="Category"
                                                options={category}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="country"
                                                label="SubCategory "
                                                options={subcategory}
                                            />
                                        </Grid>

                                        {/* <Form1 /> */}
                                        {/* <Form2 /> */}
                                        {/* <Form3 /> */}
                                        {/* <Form4 /> */}

                                        <Grid item xs={12}>
                                            <Typography>
                                                GRV Prepared By
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="state"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="state"
                                                label="Signature"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                GRV Checked By
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="state"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="state"
                                                label="Signature"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>Send</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>

                            {/* </div> */}
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Products
