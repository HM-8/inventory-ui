import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'
import itemlist from '../../../utils/data/BranchList.json'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import {
    addAssignmentInfo,
    updateAssignmentInfo,
} from 'app/redux/actions/VehicleAction'
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
    vehicle: '',
    driver: '',
    status: '',
    startingKilometer: '',
    StartDate: '',
    EndDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicle: Yup.string().required('Required'),
    driver: Yup.string().required('Required'),
    startingKilometer: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    startDate: Yup.date().required('Required'),
    endDate: Yup.date().required('Required'),
})

function AddVehicleAssignment() {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var buttonText = 'Submit'
    var titleText = 'Add Branch'
    var data = ''
    var id = ''
    const url = null
    console.log('location state', location.search)

    if (location.state === 'edit') {
        buttonText = 'Update'
        titleText = 'Edit Branch'
        const object = JSON.parse(
            window.localStorage.getItem('ASSIGNMENTS_INFO')
        )
        const index = Number(location.search.charAt(1))
        id = object[index].id
        data = {
            driver: object[index].driver,
            vehicle: object[index].vehicle,
            status: object[index].status,
            startingKilometer: object[index].startingKilometer,
            startDate: object[index].startDate,
            endDate: object[index].endDate,
        }
    }

    const INITIAL_FORM_STATE = { ...data }
    console.log('data', data)
    console.log('initial', INITIAL_FORM_STATE)

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Vehicle Assignment',
                            path: '/transport/assignment',
                        },
                        { name: titleText },
                    ]}
                />
            </div>
            <SimpleCard title="Add Vehicle Assignment">
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
                                    if (location.state === 'edit') {
                                        dispatch(
                                            updateAssignmentInfo(id, values)
                                        )
                                    } else {
                                        dispatch(addAssignmentInfo(values))
                                    }

                                    // navigate(url)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="driver"
                                                label="Driver Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="vehicle"
                                                label="Vehicle Name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="startDate"
                                                label="Start Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="endDate"
                                                label="End Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="status"
                                                label="Assignment Status"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="startingKilometer"
                                                label="Starting Kilometer "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button>{buttonText}</Button>
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

export default AddVehicleAssignment
