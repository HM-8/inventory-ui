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
                            <Textfield name="firstName" label="First Name " />
                        </Grid>

                        <Grid item xs={4}>
                            <Textfield name="middleName" label="Middle Name " />
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
                            <DateTimePicker name="dob" label="Date of Birth" />
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
                            <Textfield name="homeTel" label="House No" />
                        </Grid>

                        <Grid item xs={6}>
                            <Textfield name="mobileTel" label="Mobile No" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Address</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Textfield name="houseNo" label="House No" />
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
                            <Textfield name="subCity" label="SubCity" />
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
                                name="officeEmail"
                                label="Company Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Upload CV</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Upload name="file" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </section>
    )
}

PersonalDetails.label = 'Personal Details'
PersonalDetails.initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    doj: '',
    homeTel: '',
    mobileTel: '',
    houseNo: '',
    kebele: '',
    wereda: '',
    city: '',
    subCity: '',
    personalEmail: '',
    officeEmail: '',
    file: ''
}
PersonalDetails.validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    middleName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    dob: Yup.date().required('Required'),
    doj: Yup.date().required('Required'),
    homeTel: Yup.string(),
    mobileTel: Yup.string().required('Required'),
    houseNo: Yup.number().required('Required'),
    kebele: Yup.number().required('Required'),
    wereda: Yup.number().required('Required'),
    city: Yup.string().required('Required'),
    subCity: Yup.string().required('Required'),
    personalEmail: Yup.string(),
    officeEmail: Yup.string().required('Required'),
    file: Yup.mixed().required('Required')
})
export default PersonalDetails
