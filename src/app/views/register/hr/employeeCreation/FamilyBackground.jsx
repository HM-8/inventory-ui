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
import Checkbox from '../../../../components/FormsUI/Checkbox'
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
    s_first_name: Yup.string().required('Required'),
    s_middle_name: Yup.string().required('Required'),
    income: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
        years: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    cubic_capacity: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
        s_last_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    Dateofjoin: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
    nationality: Yup.string().required('Required'),
    education: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),

})

const FamilyBackGround=props=> {
    return (
        <Container>
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
                                        <Typography>Married</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="s_first_name"
                                            label="Spouses First Name "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="s_middle_name"
                                            label="Spouses Middle Name "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="s_last_name"
                                            label="Spouses Last Name "
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
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="education"
                                            label="Highest grade of education "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="years"
                                            label="Number of years married together "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="income"
                                            label="Gross Annual Income of household  "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>children?</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox
                                            name="children_yes"
                                            // legend="Children"
                                            label="Yes"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox
                                            name="children_no"
                                            // legend="Children"
                                            label="No"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>If Yes?</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Textfield
                                            name="no_children"
                                            label="Number of Children  "
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="s_first_name"
                                            label="Spouses First Name "
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Textfield
                                            name="s_middle_name"
                                            label="Spouses Middle Name "
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="s_last_name"
                                            label="Spouses Last Name "
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>+</Typography>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <DateTimePicker
                                            name="DateofBirth"
                                            label="Date Of Birth"
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox
                                            name="male"
                                            // legend="Children"
                                            label="Male"
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox
                                            name="female"
                                            // legend="Children"
                                            label="Female"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Not Married/Divorced?</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Are you living alone or with parents/relatives?</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Checkbox
                                            name="Yes"
                                            // legend="Children"
                                            label="Yes"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox
                                            name="No"
                                            // legend="Children"
                                            label="No"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="r_first_name"
                                            label="Relative First Name "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="r_middle_name"
                                            label="Relative Middle Name "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="r_last_name"
                                            label="Relative Last Name "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="DateofBirthRelative"
                                            label="Date Of Birth"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Select
                                            name="r_nationality"
                                            label="Nationality"
                                            options={itemlist}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="r_education"
                                            label="Highest grade of education "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="r_income"
                                            label="Gross Annual Income of household  "
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

export default FamilyBackGround
