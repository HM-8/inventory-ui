import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/AssignedVehicles.json'


import { useSelector } from 'react-redux'


const columns = [
    { id: 'DriverName', label: 'Driver Name' },
    { id: 'Name', label: 'Vehicle Name' },
    { id: 'PlateNum', label: 'Plate Number' },
    { id: 'StartingKilometer', label: 'Starting Kilometer' },
    { id: 'Year', label: 'Start Date' },
    { id: 'Year', label: 'End Date' },
    { id: 'Comments', label: 'Comments' },
    { id: 'Status', label: 'Status' },
    

]
const url = '/transport/Vehicle-assignment/add';

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

const VehicleAssignment = () => {
    // const { vehicleList } = useSelector((state) => state.vehicle)

    // const user= useSelector((state)=>state.auth.user[0])
    // const token=useSelector((state)=>state.auth.token[0])
    // console.log("user Info "+user.role);
    // console.log("user token "+token);
    // console.log(vehicleList);
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Transport', path: '/dashboard' },
                        { name: 'Vehicle Assignment' },
                    ]}
                />
            </div>
            <Box py="1px" />
{/* 
            {vehicleList.map((vhil)=>{
                <div>{"vehicle"+vhil}</div>
            })} */}


            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Assign" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Vehicle Assignment">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default VehicleAssignment