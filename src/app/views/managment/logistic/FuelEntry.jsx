import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/AssignedVehicles.json'

const columns = [
    { id: 'vn', label: 'Vehicle Name' },
    { id: 'pn', label: 'Plate No' },
    { id: 'd', label: 'Date' },
     
    
    { id: 'km-Tel', label: 'KM' },
    { id: 'v', label: 'Vendor' },
    { id: 'pu', label: 'Price Unit' },
    { id: 'cn', label: 'Coupon No ' },
    { id: 'an', label: ' A. Name' }, 
    { id: 'as', label: ' A. Signature' },
    { id: 'dn', label: ' D. Name' },
    { id: 'ds', label: ' D. Signature' }
]
const url = '/logistic/fuel-entry/new';

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

const FuelEntry = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Fuel Entry Info' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add New Fuel Entry" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Fuel Entry List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default FuelEntry
