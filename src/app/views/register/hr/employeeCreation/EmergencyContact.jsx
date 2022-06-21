import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import itemlist from '../../../../utils/data/BranchList.json'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Upload from '../../../../components/FormsUI/fileupload'
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

const EmergencyContact = (props) => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>Employee Full Name</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Textfield name="first_name" label="First Name " />
                </Grid>

                <Grid item xs={4}>
                    <Textfield name="middle_name" label="Middle Name " />
                </Grid>
                <Grid item xs={4}>
                    <Textfield name="last_name" label="Last Name " />
                </Grid>

                <Grid item xs={12}>
                    <Textfield name="relationship" label="Relationship " />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Telephone</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="MobileNumber" label="Mobile No " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="OfficeNumber" label="Office No " />
                </Grid>

                <Grid item xs={12}>
                    <Typography>Address</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="firstName" label="House No" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="lastName" label="Kebele" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="email" label="Wereda" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="city" label="City" />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="ubcity" label="Subcity" />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="areaname" label="Area name " />
                </Grid>

                <Grid item xs={6}>
                    <Select
                        name="roadfundno"
                        label="Field"
                        options={itemlist}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker
                        name="completed_year"
                        label="Year completed "
                    />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker
                        name="timeofIssuance"
                        label="Time of Issurance "
                    />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker name="expiryDate" label="Expiry Date " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="recievedFrom" label="Recieved From " />
                </Grid>
                <Grid item xs={6}>
                    <Upload name="upload" label="Upload CV " />
                </Grid>
            </Grid>
        </Container>
    )
}
EmergencyContact.label = 'Emergency'
EmergencyContact.initialValues = {
    first_name: '',
    middle_name: '',
    last_name: '',
    relationship: '',
    MobileNumber: '',
    OfficeNumber: '',
    houseNo: '',
    kebele: '',
    wereda: '',
    city: '',
    subCity: '',
    areaName: '',
    roadfundno: '',
    completed_year: '',
    timeofIssuance: '',
    expiryDate: '',
    recievedFrom: '',
    upload: '',
}
EmergencyContact.validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    middle_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    relationship: Yup.string(),
    MobileNumber: Yup.string().required('Required'),
    OfficeNumber: Yup.string(),
    houseNo: Yup.string().required('Required'),
    kebele: Yup.string(),
    wereda: Yup.string().required('Required'),
    city: Yup.string(),
    subCity: Yup.string().required('Required'),
    areaName: Yup.string(),
    roadfundno: Yup.string().required('Required'),
    completed_year: Yup.string(),
    recievedFrom: Yup.string().required('Required'),
    upload: Yup.string(),
    timeofIssuance: Yup.date().required('Required'),
    expiryDate: Yup.date().required('Required'),
})
export default EmergencyContact
