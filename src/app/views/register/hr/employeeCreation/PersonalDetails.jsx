import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import itemlist from '../../../../utils/data/BranchList.json'
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
    full_name: '',
    middle_name: '',
    last_name: '',
    model: '',
    yearManufactured: '',
    numberOfCylinders: '',
    horsepower: '',
    cubic_capacity: '',
    color: '',
    carrying_cap: '',
    status: '',
    registration_num: '',
    engine_num: '',
    chassis_num: '',
    plate_num: '',
    fuel_type: '',
    fuel_measurment: '',
    track_usage: '',
}

const FORM_VALIDATION = Yup.object().shape({
    full_name: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    numberOfCylinders: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    horsepower: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    cubic_capacity: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    middle_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function PersonalDetails() {
    // const [state, setState] = useState()

    // const handleChange = (event) => {
    //     event.persist()
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    // const handleDateChange = (date) => {
    //     setState({ ...state, date })
    // }

    // const {
    //     gender,
    // } = state

    return (
        <Container>
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
                                    <Grid item xs={12}>
                                        <Typography>
                                            Employee Full Name
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="full_name"
                                            label="Full Name "
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Textfield
                                            name="middle_name"
                                            label="Middle Name "
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="last_name"
                                            label="Last Name "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Gender</Typography>
                                    </Grid>
{/* 
                                    <RadioGroup
                                        sx={{ mb: 2 }}
                                        value={gender || ''}
                                        name="gender"
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="Male"
                                            control={
                                                <Radio color="secondary" />
                                            }
                                            label="Male"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Female"
                                            control={
                                                <Radio color="secondary" />
                                            }
                                            label="Female"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Others"
                                            control={
                                                <Radio color="secondary" />
                                            }
                                            label="Others"
                                            labelPlacement="end"
                                        />
                                    </RadioGroup> */}
                                    
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="DateofBirth"
                                            label="Date of Birth"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="Dateofjoin"
                                            label="Date Of Joining"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Select
                                            name="nationality"
                                            label="Nationality"
                                            options={itemlist}
                                        />
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PersonalDetails
