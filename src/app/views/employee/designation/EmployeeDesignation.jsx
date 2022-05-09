import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/employmentType.json'

const columns = [
    { id: 'employment-type', label: 'Employee Designation' },
    { id: 'description', label: 'Description' }
]
const url = '/employee/employee-designation/add';

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

const EmployeeDesignation = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Employee', path: '/dashboard' },
                        { name: 'Employee Designation' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add Employee Designation" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Employee Designation">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default EmployeeDesignation
