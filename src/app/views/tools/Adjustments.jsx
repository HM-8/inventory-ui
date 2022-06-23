import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {
    Grid,
    Typography,
} from '@mui/material'

import Button from '../../components/FormsUI/Button/index'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import TextareaAutosize from '@mui/material/TextareaAutosize'


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

function Adjustments() {

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
                    <Grid item xs={12}>
                        <Typography>Maintenance and repair</Typography>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={8}
                                placeholder="   Drag and Drop file Here"
                                style={{ width: 1000, borderRadius: '10px', padding:'10px' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Inventory Reconciliation Adjustment{' '}
                        </Typography>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={8}
                                placeholder="   Drag and Drop file Here"
                                style={{ width: 1000, borderRadius: '10px',padding:'10px' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Adjustments
