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

const INITIAL_FORM_STATE = {
    roadFundNo: '',
    dateofIssuance: '',
    timeofIssuance: '',
    expiryDate: '',
    recievedFrom: '',
    city: '',
    subcity: '',
    wereda: '',
    kebele: '',
    houseNo: '',
    areaCode: '',
    mobileNo: '',
    totAmtRecievedInWords: '',
    totAmtRecievedInNum: '',
    collectionMode: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
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
    AssignmentStatus: Yup.string().required('Required'),
    yearManufactured: Yup.string(),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function RoadFunds() {
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
                                <Grid item xs={6}>
                                        <Textfield
                                            name="school"
                                            label="School/University Name "
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="school"
                                            label="Degree Type"
                                        />
                                    </Grid>
                                   
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="completed_year"
                                            label="Year Started "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="timeofIssuance"
                                            label="Year Completed "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                            <Upload
                                                name="upload"
                                                label="Upload Certification"
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

export default RoadFunds
