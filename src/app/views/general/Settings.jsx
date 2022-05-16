// import {TextField,  } from '@mui/material'
import React from 'react'
// import Form from '../material-kit/forms/Form'
// import DropDown from '../material-kit/drop-down/DropDown'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// import { makeStyles } from '@mui/styles';
import {
    //   Container,
    Grid,
    Typography,
} from '@mui/material'

import Textfield from '../../components/FormsUI/Textfield'
import Select from '../../components/FormsUI/Select'
import DateTimePicker from '../../components/FormsUI/DataTimePicker'
import Checkbox from '../../components/FormsUI/Checkbox'
import { Button } from '@mui/material'
// import countries from './data/countries.json';
import countries from '../../utils/data/countries.json'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

// import dropDownData from '../../../utils/data/dropDownData.json'
import dropDownData from '../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

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

function Settings() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
                        { name: 'Settings' },
                    ]}
                />
            </div>
            <SimpleCard title="Settings">
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
                                            <Textfield
                                                name="firstName"
                                                label="Default discount amount"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Default Tax amount"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="email"
                                                label="Default Payment Method"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <StyledButton
                                                variant="contained"
                                                color="primary"
                                            >
                                                Default Safety Stock
                                            </StyledButton>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="addressLine1"
                                                label="Default Currency"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Default Notification</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Minimum stock level"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="city"
                                                label="Expired items"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="state"
                                                label="Shelf life ended items"
                                            />
                                        </Grid>
{/* 
                                        <Grid item xs={12}>
                                            <Select
                                                name="country"
                                                label="Country"
                                                options={countries}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Booking information
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="arrivealDate"
                                                label="Arrival Date"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="departureDate"
                                                label="Departure Date"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="message"
                                                label="Message"
                                                multiline={true}
                                                rows={4}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Checkbox
                                                name="termsOfService"
                                                legend="Terms Of Service"
                                                label="I agree"
                                            />
                                        </Grid> */}

                                        <Grid item xs={12}>
                                            <Button>Submit Form</Button>
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

export default Settings
