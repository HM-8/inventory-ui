import React from 'react'
import * as Yup from 'yup'
import {
    Grid,
    Typography,
} from '@mui/material'

import Textfield from '../../components/FormsUI/Textfield'
import Select from '../../components/FormsUI/Select'
import DateTimePicker from '../../components/FormsUI/DataTimePicker'
import Button from '../../components/FormsUI/Button/index'
import countries from '../../utils/data/countries.json'
import styled from '@emotion/styled'
import BinCard from './BinCard'

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

function Form3() {

    return (
        <>
            <Grid item xs={6}>
                <Textfield name="firstName" label="Barcode" />
            </Grid>
            <Grid item xs={12}>
                <Typography>Radio Buttons Here!!! Has Batch No?</Typography>
            </Grid>
            
            <Grid item xs={6}>
                <Textfield name="firstName" label="Batch no " />
            </Grid> 
            <Grid item xs={6}>
                <DateTimePicker name="Expirydate" label="Expiry date" />
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="Shelf Life" />
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="End of Life" />
            </Grid>

            <Grid item xs={12}>
                <Typography>Set Price</Typography>
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="UMO" />
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="Price" />
            </Grid>
            <Grid item xs={12}>
                <Typography>Added Value</Typography>
            </Grid>    
            <Grid item xs={6}>
                <Textfield name="firstName" label="Company profit" />
            </Grid>
            <Grid item xs={12}>
                <Typography>+</Typography>
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="Added value Name" />
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="Price" />
            </Grid>

            <Grid item xs={12}>
                <Typography>Selling Item</Typography>
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="UMO" />
            </Grid>
            <Grid item xs={6}>
                <Textfield name="firstName" label="Price" />
            </Grid>

            <Grid item xs={12}>
                <Typography>Bin Location Info.</Typography>
            </Grid>
            <Grid item xs={6}>
                <Select
                    name="country"
                    label="Branch name"
                    options={countries}
                />
            </Grid>

            <Grid item xs={6}>
                <Select name="country" label="Zone" options={countries} />
            </Grid>
            <Grid item xs={6}>
                <Select name="country" label="Aile" options={countries} />
            </Grid>
            <Grid item xs={6}>
                <Select name="country" label="Rack" options={countries} />
            </Grid>
            <Grid item xs={6}>
                <Select name="country" label="Shelf" options={countries} />
            </Grid>

            <Grid item xs={6}>
                <Textfield name="lastName" label="Bin" />
            </Grid>
             
             <BinCard />

            <Grid item xs={12}>
                <Button>Generate BIN Card</Button>
            </Grid>
        </>
    )
}

export default Form3
