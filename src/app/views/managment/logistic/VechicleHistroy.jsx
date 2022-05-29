import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/AssignedVehicles.json'

const columns = [
// ÷Vehicle Plate No.
// Vehicle Name 
// No. of Employees - based on their No
// Employee Name
// Employee ID
// [Fetch their contact details and Address]
// Description
// Service 
// Starting Date
// End Date
// Kilometer Reading
// Starting Kilometer
// Returning Kilometer


    { id: 'VehiclePlateNo', label: 'Plate No' },
    { id: 'Name', label: 'Vehicle Name' },
    { id: 'No_of_Employee', label: '# of Employees' },
     
    { id: 'EmployeeId', label: 'Emp Id' },
    { id: 'Description', label: 'Desc' },
    { id: 'Service', label: 'Service' },
    { id: 'Start_Date', label: 'Start Date' },
    { id: 'End_Date', label: 'End Date' },
    { id: 'Starting_km', label: 'Start KM' },
    { id: 'Returning_km', label: 'Returning KM' },
    

]
const url = '/logistic/vehicle-history/new';

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

const VehicleHistory = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Vehicle History' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add New Employee Service" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Vechicle Service History">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default VehicleHistory
