import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Button from '../../../../components/FormsUI/Button/index'
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

function AttendanceRequest() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'My Requests', path: '/dashboard' },
                        { name: 'Attendance Request' },
                    ]}
                />
            </div>
            <SimpleCard title="Send Attendance Request">
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
                                            <DateTimePicker
                                                name="attendanceDate"
                                                label="Attendance Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="reason"
                                                label="Reason"
                                                rows={4}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>Submit Form</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>

                            {/* </div> */}
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default AttendanceRequest
