import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid,
    Typography,
} from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import genderList from '../../../../utils/data/GenderList.json'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'


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
    fullName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    doj: '',
    houseTel: '',
    mobileTel: '',
    houseNo: '',
    kebele: '',
    wereda: '',
    city: '',
    subCity: '',
    personalEmail: '',
    companyEmail: '',
}

const FORM_VALIDATION = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    dob: Yup.date().required('Required'),
    doj: Yup.date().required('Required'),
    houseTel: Yup.string(),
    mobileTel: Yup.string().required('Required'),
    houseNo: Yup.number().required('Required'),
    kebele: Yup.number().required('Required'),
    wereda: Yup.number().required('Required'),
    city: Yup.string().required('Required'),
    subCity: Yup.string().required('Required'),
    personalEmail: Yup.string(),
    companyEmail: Yup.string().required('Required'),
})

function PersonalDetails() {
    const dispatch = useDispatch()


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
                                //dispatch(addBranchInfo(values))
                                console.log("personal details", values)
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
                                            name="firstName"
                                            label="First Name "
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Textfield
                                            name="middleName"
                                            label="Middle Name "
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Textfield
                                            name="lastName"
                                            label="Last Name "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Select
                                            name="gender"
                                            label="Gender"
                                            options={genderList}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="dob"
                                            label="Date of Birth"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="doj"
                                            label="Date Of Joining"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>Telephone</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="houseTel"
                                            label="House No"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="mobileTel"
                                            label="Mobile No"
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
                                            name="houseNo"
                                            label="House No"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="kebele"
                                            label="Kebele"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="wereda"
                                            label="Wereda"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="city" label="City" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="subCity"
                                            label="SubCity"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Email</Typography>
                                    </Grid>
                                <Grid item xs={6}>
                                        <Textfield
                                            name="personalEmail"
                                            label="Personal Email"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="companyEmail"
                                            label="Company Email"
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
