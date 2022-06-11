import React from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../../material-kit/buttons/LinkButton'

import rows from '../../../../utils/data/Branch.json'

const columns = [
    { id: 'location', label: 'Location' },
    { id: 'branch-manager', label: 'Branch Manager' },
    { id: 'telephone', label: 'Telephone' },
    { id: 'email', label: 'Email' },
    { id: 'type', label: 'Inventory Type' }
]
const url = '/general/NewBranch';

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

const Branch = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
                        { name: 'Branch' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add Branch" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Branches">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Branch
