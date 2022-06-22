import React from 'react'
import * as Yup from 'yup'
import { Box, Grid, Typography } from '@mui/material'
import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import genderList from '../../../../utils/data/GenderList.json'
import styled from '@emotion/styled'
import Upload from '../../../../components/FormsUI/fileupload'

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
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const PersonalDetails = (props) => {
    return (
        <section>
            <Container>
                <Box py="12px" />
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography>Employee Full Name</Typography>
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
                                <Textfield name="lastName" label="Last Name " />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    name="gender"
                                    label="Gender"
                                    options={genderList}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    name="designation"
                                    label="Designation"
                                    options={genderList}
                                />
                            </Grid><Grid item xs={6}>
                                <Select
                                    name="department"
                                    label="Department"
                                    options={genderList}
                                />
                            </Grid><Grid item xs={6}>
                                <Select
                                    name="branch"
                                    label="Branch"
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
                                <Textfield name="hometel" label="House No" />
                            </Grid>

                            <Grid item xs={6}>
                                <Textfield name="mobiletel" label="Mobile No" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Address</Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Textfield name="houseno" label="House No" />
                            </Grid>

                            <Grid item xs={6}>
                                <Textfield name="kebele" label="Kebele" />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield name="wereda" label="Wereda" />
                            </Grid>

                            <Grid item xs={6}>
                                <Textfield name="city" label="City" />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield name="subcity" label="SubCity" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Email</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield
                                    name="pemail"
                                    label="Personal Email"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Textfield
                                    name="oemail"
                                    label="Company Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Upload CV</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Upload name="CV" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

PersonalDetails.label = 'Employee Info'
PersonalDetails.initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    designation:'',
    department:'',
    branch:'',
    pemail: '',
    oemail: '',
    hometel: '',
    mobiletel: '',
    city: '',
    subcity: '',
    kebele: '',
    wereda: '',
    houseno: '',
    dob: '',
    doj: '',
    CV: '',
}
PersonalDetails.validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required(),
    middleName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required(),
    lastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required(),
    gender: Yup.string(),
    designation:Yup.string(),
    department:Yup.string(),
    branch:Yup.string(),
    pemail: Yup.string().email(),
    oemail: Yup.string().email(),
    hometel: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    mobiletel:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    city: Yup.string(),
    subcity: Yup.string(),
    kebele: Yup.string(),
    wereda: Yup.string(),
    houseno: Yup.string(),
    dob: Yup.date().required(),
    doj: Yup.date().required(),
    CV: Yup.mixed().required('File is required'),
})
export default PersonalDetails
