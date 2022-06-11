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

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Button from '../../../../components/FormsUI/Button'
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

function ItemTransfer() {
    // const classes = useStyles();

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
            <SimpleCard title="SIV Form">
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
                                            <Textfield
                                                name="firstName"
                                                label="Branch name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Item code"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="lastName"
                                                label="SIV No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="departureDate"
                                                label="Issue Date "
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="departureDate"
                                                label="Req Date"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine1"
                                                label="Req No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Bin Location
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="Previous"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="addressLine2"
                                                label="New"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                SIV Received by
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
                                                SIV Approved By
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

                            {/* </div> */}
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default ItemTransfer
