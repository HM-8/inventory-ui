import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'

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
    { id: 'date', label: 'Department', minWidth: 10 },
    { id: 'status', label: 'Address', minWidth: 10 },
    { id: 'shiftStart', label: 'Reason', minWidth: 10 },
    { id: 'shiftEnd', label: 'Date', minWidth: 10 },
    { id: 'status', label: 'Status', minWidth: 10 },
  ]

function createData(shiftStart, date, shiftEnd,employee,status) {
    return {
        shiftStart: shiftStart,
        date: date,
        shiftEnd: shiftEnd,
        employee:employee,
        status:status,
    }
}

const rows = data.map((item) => {
    const container = {}
    createData(
        (container.shiftStart = item.shiftStart),
        (container.date = item.date),
        (container.shiftEnd = item.shiftEnd),
        (container.employee = item.employee),
        (container.status = item.status),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const TravelReuestReport = () => {
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
                        { name: 'Travel Requests' },
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
                <SimpleCard title="Promotions">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>
        </Container>
    )
}

export default TravelReuestReport