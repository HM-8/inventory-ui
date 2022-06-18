import React from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../../material-kit/buttons/LinkButton'

import rows from '../../../../utils/data/AssignedVehicles.json'

const columns = [
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
    { id: 't', label: 'TR. Name' },
    { id: 't', label: 'TR. Signature' },
]
const url = '/logistic/trips/new-employee';

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
                        { name: 'Employee Transfer' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add Employee Transport" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Employee Transport">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default FuelEntry
