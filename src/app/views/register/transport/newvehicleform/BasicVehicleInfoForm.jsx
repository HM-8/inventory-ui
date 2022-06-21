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

const BasicVehicleInfo=props=> {
    return (
        <Container>
            <Grid container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Select
                            name="vehicleName"
                            label="Vehicle Name"
                            options={itemlist}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield
                            name="registration_num"
                            label="Registration Number "
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="model" label="Model" />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="engine_num" label="Engine Number " />
                    </Grid>

                    <Grid item xs={6}>
                        <DateTimePicker
                            name="yearManufactured"
                            label="year of Manufacture "
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="chassis_num" label="Chasis Number " />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield
                            name="numberOfCylinders"
                            label="Number Of Cylinders "
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="horsepower" label="Horse Power " />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            name="fuel_type"
                            label="Fuel Type"
                            options={itemlist}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            name="fuel_measurment   "
                            label="Fuel Measurment in"
                            options={itemlist}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="plate_num" label="Plate number " />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            name="cubic_capacity"
                            label="Cubic Capacity"
                            options={itemlist}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield name="color" label="Body Color " />
                    </Grid>

                    <Grid item xs={6}>
                        <Select
                            name="TrackUsage"
                            label="Track Usage"
                            options={itemlist}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            name="carrying_cap"
                            label="Carrying Capacity"
                            options={itemlist}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Select
                            name="status"
                            label="Status"
                            options={itemlist}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
BasicVehicleInfo.label = 'Basic Info';
BasicVehicleInfo.initialValues = {
    vehicleName: '',
    model: '',
    yearManufactured: '',
    numberOfCylinders: '',
    horsepower: '',
    cubic_capacity: '',
    color: '',
    carrying_cap: '',
    status: '',
    registration_num: '',
    engine_num: '',
    chassis_num: '',
    plate_num: '',
    fuel_type: '',
    fuel_measurment: '',
    track_usage: '',
};

BasicVehicleInfo.validationSchema = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    numberOfCylinders: Yup.string().required('Required'),
    horsepower: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    cubic_capacity: Yup.string().required('Required'),
    yearManufactured: Yup.string(),
    color:Yup.string().required('Required'),
    carrying_cap:Yup.string().required('Required'),
    Status:Yup.string(),
    registration_num:Yup.string(),
    engine_num:Yup.string(),
    plate_num:Yup.string(),
    fuel_type:Yup.string(),
    fuel_measurment:Yup.string(),
    track_usage:Yup.string(),
})
export default BasicVehicleInfo
