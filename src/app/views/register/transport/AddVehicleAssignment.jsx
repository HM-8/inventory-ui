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
    status: '',
    startingKilometer: '',
    StartDate: '',
    EndDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    driverName: Yup.string().required('Required'),
    startingKilometer: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function AddVehicleAssignment() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Vehicle Assignment',
                            path: '/transport/assignment',
                        },
                        { name: 'New Vehicle Assignment' },
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
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Select
                                                name="driverName"
                                                label="Driver Name"
                                                options={itemlist}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="vehicleName"
                                                label="Vehicle Name"
                                                options={itemlist}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="StartDate"
                                                label="Start Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="EndDate"
                                                label="End Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="status"
                                                label="Assignment Status"
                                                options={itemlist}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="startingKilometer"
                                                label="Starting Kilometer "
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

export default AddVehicleAssignment
