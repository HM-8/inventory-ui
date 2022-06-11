import React from 'react'
// import PaginationTable from '../../../material-kit/tables/PaginationTable'
import PaginationTable from '../../material-kit/tables/PaginationTable'

import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/supplier.json'

const columns = [
    { id: 'company-name', label: 'Company Name' },
    { id: 'location', label: 'Location' },
    { id: 'telephone', label: 'Telephone' },
    { id: 'email', label: 'Email' },
]
const url = '/item/Newsupplier';

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

const Supplier = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item', path: '/dashboard' },
                        { name: 'Supplier' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add Supplier" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Supplier List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Supplier
