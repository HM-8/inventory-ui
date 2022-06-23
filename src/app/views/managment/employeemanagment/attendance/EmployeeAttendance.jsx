import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import TimePicker from '../../../../components/FormsUI/TimePicker'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Paymentmode from '../../../../utils/data/attendance.json'
import {
    addAttendanceInfo,
    updateAttendanceInfo,
} from 'app/redux/actions/AttendanceAction'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
    employee: '',
    status: '',
    startShift: '',
    endShift: '',
    attendanceDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    employee: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    startShift: Yup.string().required('Required'),
    endShift: Yup.string(),
    attendanceDate: Yup.date().required('Required'),
})

function Attendance() {
    const dispatch = useDispatch()
    const data = ''
    const INITIAL_FORM_STATE = { ...data }
    console.log('data', data)
    console.log('initial', INITIAL_FORM_STATE)

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Attendance' },
                    ]}
                />
            </div>
            <SimpleCard title="Attendance">
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
                                    dispatch(addAttendanceInfo(values))
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="employee"
                                                label="Employee Id"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="attendanceDate"
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
                                            <TimePicker
                                                name="startShift"
                                                label="Start Shift"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TimePicker
                                                name="endShift"
                                                label="End Shift"
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

export default Attendance
