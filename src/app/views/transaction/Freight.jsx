import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../components/FormsUI/Textfield'
import Select from '../../components/FormsUI/Select'
import DateTimePicker from '../../components/FormsUI/DataTimePicker'
import Checkbox from '../../components/FormsUI/Checkbox'
import Button from '../../components/FormsUI/Button/index'
import countries from '../../utils/data/countries.json'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import dropDownData from '../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Link } from 'react-router-dom'

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

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

function Freight() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Transaction', path: '/dashboard' },
                        { name: 'Item Transfer' },
                    ]}
                />
            </div>
            <SimpleCard title="Freight">
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
                                                label="Items No "
                                                options={countries}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="firstName"
                                                label="Item Name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Quantity"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine1"
                                                label="Length"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Width"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Height"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Weight"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                <h3>Pickup</h3>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label=" Branch name"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Address</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography></Typography>
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

                                        <Grid item xs={12}>
                                            <Typography>
                                                Contact Info
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="phone"
                                                label="Company Tel No "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="phone"
                                                label="Contact Person Mobile No "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                <h3>Delivery</h3>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label=" Branch name"
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
                                            <Textfield
                                                name="phone"
                                                label="Reasons /Description/"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Trip Date </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="departureDate"
                                                label="From "
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="departureDate"
                                                label="To "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Transport Requestor
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
                                                Transport Approver
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

                                        <Link to="/transaction/SIV">
                                            <Grid xs={12}>
                                                <StyledButton
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    SIV
                                                </StyledButton>
                                            </Grid>
                                        </Link>
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

export default Freight
