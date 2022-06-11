import React from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../../material-kit/buttons/LinkButton'

import rows from '../../../../utils/data/vehicleNameDD.json'
const columns = [
//     Request Approver 
// Name
// Signature
// Approver 
    // Assign Fuel
    // Assign car 
// Assign pocket money for the driver
// Record the ff
    // Service Date
    // Address
    // House No.
    // Kebele
    // Wereda
    // Subcity
    // City
    // Area name (optional)
// Starting
// Kilometer
// Time
// Return  
// Time
// Kilometer
// Kilometer difference
// Items Receiver Affirmation 
// Name
// Signature

    
    { id: 'lcc', label: 'RA Name' },
    { id: 'pc', label: 'RA Signature'},
    { id: 't', label: 'Fuel' },
    { id: 'tot', label: 'Car' },
    { id: 't', label: 'P. Money' },
    { id: 't', label: ' Date' },
    { id: 't', label: 'S. KM' },
    { id: 't', label: 'S. Time' },
    { id: 't', label: 'R. KM' },
    { id: 't', label: 'R. Time' },
    { id: 't', label: 'KM diff' },
    { id: 't', label: 'IR. Name' },
    { id: 't', label: 'IR. Signature' },
   
   
]
const url = '/trip/item/add';

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

const ItemTransportation = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Item Transport Info' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add New Item Transport" url={url}/>
                <br/><br/>
                </Grid>
            </Grid>
            <SimpleCard title="Item Transport History">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default ItemTransportation
