import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Paymentmode from '../../../../utils/data/paymentmode.json'

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
    vehicleName: '',
    driverName: '',
    FuelMeasurment: '',
    AssignmentStatus: '',
    TrackUsage: '',
    StartDate: '',
    EndDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    driverName: Yup.string().required('Required'),
    FuelMeasurment: Yup.string().required('Required'),
    AssignmentStatus: Yup.string().required('Required'),
    TrackUsage: Yup.string(),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function Tool() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Tool' },
                    ]}
                />
            </div>
            <SimpleCard title="Attendnace Tool">
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
                                            <Select
                                                name="emp_name"
                                                label="Employee"
                                                options={Paymentmode}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="date"
                                                label="Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="status"
                                                label="Status"
                                                options={Paymentmode}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Shift time</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="start_date"
                                                label="Start date  "
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="end_date"
                                                label="End date "
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>Submit Form</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Tool
