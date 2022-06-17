import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Form from '../../../material-kit/forms/Form'
import DropDown from '../../../material-kit/drop-down/DropDown'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import dropDownData from '../../../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import vehicleNameDD from '../../../../utils/data/vehicleNameDD.json'

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
// Issue No.
// Service place
// Completed services
// Guage Reading
// Before service
// After service
// Vendor - Dropdown
// Technical Description of the issue
// Technical Inspector
// Name
// Signature
function AddServiceDetail() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Employee Transport', path: '/trip/employee' },
                        { name: 'Employee Transport Approval' },
                    ]}
                />
            </div>
            <SimpleCard title="Item Transport Approval">
                <Form buttonText={buttonText}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <DropDown
                                label="Fuel"
                                name="driverName"
                                validators={['required']}
                                options={vehicleNameDD}
                                errorMessages={['this field is required']}
                            />
                            <br />
                            <br />
                            <DropDown
                                label="Car"
                                name="driverName"
                                validators={['required']}
                                options={vehicleNameDD}
                                errorMessages={['this field is required']}
                            />
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="Pocket Money"
                                type="number"
                                name="plate"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <br />
                            <br />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    renderInput={(props) => (
                                        <TextField
                                            {...props}
                                            // variant="Outlined"
                                            id="mui-pickers-date"
                                            label="Service Date"
                                            sx={{ mb: 2, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            <div>
                                <br />
                                <h4>Address</h4>
                            </div>
                            <TextField
                                fullWidth
                                label="City"
                                type="text"
                                name="city"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />{' '}
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="Sub City"
                                type="text"
                                name="subCity"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />{' '}
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="Wereda"
                                type="text"
                                name="wereda"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />{' '}
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="House Number"
                                type="text"
                                name="housenum"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />{' '}
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="Area Code"
                                type="text"
                                name="areaCode"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <br />
                            <br />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <div>
                                <h4>Starting</h4>
                            </div>
                            <TextField
                                fullWidth
                                label="Starting Kilometer"
                                type="number"
                                name="startKM"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <br />
                            <br />

                            <TextField
                                fullWidth
                                label="Starting Time"
                                type="number"
                                name="startKM"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="Returning Kilometer"
                                type="number"
                                name="returnKM"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <br />
                            <br />
                            <div>
                                <h4>Returning</h4>
                            </div>
                            <TextField
                                fullWidth
                                label="Returning Time"
                                type="number"
                                name="returnKM"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <br />
                            <br />
                            <TextField
                                fullWidth
                                label="KM Difference"
                                type="number"
                                name="empID"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                    </Grid>
                </Form>
            </SimpleCard>
        </Container>
    )
}

export default AddServiceDetail
