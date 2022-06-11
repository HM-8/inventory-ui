import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/AssignedVehicles.json'

const columns = [
    // Issue no.
    // Issue Approver
    // Name
    // Signature
    // Vehicle Plate No.
    // Issue Description
    // Is it a kilometer service? - Checkbox
    // Priority
    // Low 
    // Medium
    // High
    // Due Date
    


    { id: 'Issue_no', label: 'Issue No' },
    { id: 'Issue Approver', label: 'Issue Approver' },
    { id: 'Name', label: 'Name' },
     
    { id: 'Signature', label: 'Signature' },
    { id: 'plateno', label: 'Plate No' },
    { id: 'Description', label: 'Description' },
    { id: 'IsKM', label: 'KM Service' },
    { id: 'Priority', label: 'Priority' },
    { id: 'Due_date', label: 'Due date' },
   
    

]
const url = '/logistic/new-issues';

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

const Issue = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Issue Info' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add New Issue" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Issue List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Issue
