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
    firstName: '',
    barcode: '',
    binNo: '',
    subcategory: '',
    variant: '',
    uom: '',
    qty: '',
    discount: '',
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    barcode: Yup.string().required('Required'),
    binNo: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
        .required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    arrivealDate: Yup.date().required('Required'),
    departureDate: Yup.date().required('Required'),
    message: Yup.string(),
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
                                                name="issueno"
                                                label="Vehicle Plate No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="Vehicle Name"
                                                label="Carrying Capacity"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="Driver"
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
                                                name="Assignment Status"
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
                                                name="Assignment Status"
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