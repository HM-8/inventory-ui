import React from 'react'
import * as Yup from 'yup'
import {
    Grid,
    Typography,
} from '@mui/material'

import Textfield from '../../components/FormsUI/Textfield'
import Select from '../../components/FormsUI/Select'
import DateTimePicker from '../../components/FormsUI/DataTimePicker'
import countries from '../../utils/data/countries.json'
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

function BinCard() {

    return (
        <>
            
            <Grid item xs={12}>
                <Typography>Bin Card</Typography>
            </Grid>
            <Grid item xs={6}>
                <Textfield name="lastName" label="Bin No" />
            </Grid>

            <Grid item xs={6}>
                <Select
                    name="country"
                    label="Bin Location"
                    options={countries}
                />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="phone" label="Minimum Quantity " />
            </Grid>
            <Grid item xs={6}>
                <Textfield name="phone" label="Maximum Quantity " />
            </Grid>
            <Grid item xs={12}>
                <Typography>Ordering Level</Typography>
            </Grid>

            <Grid item xs={6}>
                <DateTimePicker name="arrivealDate" label="Date" />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="addressLine1" label="Contact No" />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="addressLine2" label="Quantity Received " />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="city" label="Quantity Issued" />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="state" label="Balance" />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="phone" label="Remarks" />
            </Grid>
        </>
    )
}

export default BinCard
