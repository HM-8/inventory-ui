import { Grid, Icon, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../../material-kit/forms/Form'
import DropDown from '../../material-kit/drop-down/DropDown'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import vehicleNameDD from '../../../utils/data/vehicleNameDD.json' 
import { DatePicker, LocalizationProvider } from '@mui/lab'
import assignmentStatus from '../../../utils/data/assignmentStatus.json' 
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useTheme } from '@emotion/react'

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

function AddVehicleAssignment() {
    const { palette } = useTheme()
    const textColor = palette.text.primary
    
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Vehicle Assignment',
                            path: '/transport/assignment',
                        },
                        { name: 'Add Vehicle Assignment' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Vehicle Assignment">
                <Form buttonText={buttonText}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <DropDown
                            label="Vehicle Name"
                            
                            name="vehicleName"
                            
                            validators={['required']}
                            options={vehicleNameDD}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />

<br/><br/>
<DropDown
                            label="Driver Name"
                            
                            name="driverName"
                            
                            validators={['required']}
                            options={vehicleNameDD}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />
                        <br/><br/>
                    <DropDown
                            label="Fuel Measurement In"
                            
                            name="fuelMeasurement"
                             
                            validators={['required']}
                            options={vehicleNameDD}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />
                       <br/><br/>
                    < DropDown
                            label="Track Usage As"
                            
                            name="trackUsage"
                           
                            validators={['required']}
                            options={vehicleNameDD}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />
                        <br/><br/>
                            <TextField
                            label="Starting Kilometer"
                            type="number"
                            name="startKM"
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        
                       </Grid>
                       <Grid item lg={6} md={6} sm={12} xs={6} sx={{ mt: 2 }}>
 <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                               
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Start Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                       <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                               
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="End Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        
                    
                         
                     
                        < DropDown
                            label="Assignment Status"
                            
                            name="assStatus"
                           
                            validators={['required']}
                            options={assignmentStatus}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />
                            
                        </Grid>
                      
                    </Grid> 
                   
                </Form>
            </SimpleCard>
        </Container>
    )
}

export default AddVehicleAssignment
