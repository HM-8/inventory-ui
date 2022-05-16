import React from 'react'
// import PaginationTable from '../../../material-kit/tables/PaginationTable'
import PaginationTable from '../../material-kit/tables/PaginationTable'

import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/variants.json'

const columns = [
    { id: 'measurement-unit', label: 'Measurement Unit' },
    { id: 'abbreviation', label: 'Abbreviation' },
    { id: 'description', label: 'Description' },
]
const url = '/item/New-uom';

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

const UOM = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item', path: '/dashboard' },
                        { name: 'UOM' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add UOM" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="UOM List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default UOM
