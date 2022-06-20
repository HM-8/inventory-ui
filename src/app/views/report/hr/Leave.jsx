import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TableButton from '../../material-kit/buttons/LinkButton'

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

const columns = [
  { id: 'employee', label: 'Employee', minWidth: 10 },
    { id: 'leavetype', label: 'Leave Type', minWidth: 10 },
    { id: 'fromDate', label: 'From Date ', minWidth: 10 },
    { id: 'toDate', label: 'To Date', minWidth: 10 },
]

function createData(toDate, leavetype, fromDate,employee) {
    return {
        toDate: toDate,
        leavetype: leavetype,
        fromDate: fromDate,
        employee:employee,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.toDate = item.toDate),
        (container.leavetype = item.leavetype),
        (container.fromDate = item.fromDate),
        (container.employee = item.employee),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Leave = () => {
    const [show, setShow] = useState(false)

    const handleButton = () => {
        setShow(!show)
        console.log(show)
    }
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Transfers' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid
                container
                direction="row"
                spacing={2}
                justifyContent="flex-end"
            >
            </Grid>
            <Grid item xs={12}>
                <SimpleCard title="Leave">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>
        </Container>
    )
}

export default Leave