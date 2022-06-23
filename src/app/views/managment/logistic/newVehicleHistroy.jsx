import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Vehicle from '../../../utils/data/vehicleNameDD.json'

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
    '& .font':{
        fontWeight:'bold',
        fontSize:'16px'
    }

}))

const INITIAL_FORM_STATE = {
    driver: '',
    VehicleName:'',
    startdate:'',
    Priority: '',
    Skm: '',
    plate: '',
    EmployeeName: '',
    qty: '',
    issueno: '',
}

const FORM_VALIDATION = Yup.object().shape({
    VehicleName: Yup.string().required('Required'),
    driver: Yup.string().required('Required'),
    Priority: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
        .required('Required'),
        EmployeeName: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    issueno: Yup.string().required('Required'),
    plate: Yup.string().required('Required'),
    Rkm: Yup.string().required('Required'),
    startdate: Yup.date().required('Required'),
    enddate: Yup.date().required('Required'),
    Skm: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
})

function newVehicleHistroy() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Vechicle History', path: '/logistic/vehicle-history' },
                        { name: 'New History' },
                    ]}
                />
            </div>
            <SimpleCard title="New History">
                <Grid container>
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
                                                name="plate"
                                                label="Vehicle Plate No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="VehicleName"
                                                label="Carrying Capacity"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="driver"
                                                label="Priority"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="startdate"
                                                label="Start Date"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="enddate"
                                                label="End Date"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="Priority"
                                                label="Priority"
                                                options={Vehicle}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Skm"
                                                label="Starting Kilometer"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="plate"
                                                label="Vehicle Plate No"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Rkm"
                                                label="Returning Kilometer"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="EmployeeName"
                                                label="Employee Name"
                                                options={Vehicle}
                                            />
                                        </Grid>  
                                        <Grid item xs={12}>
                                            <Button>ADD</Button>
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

export default newVehicleHistroy