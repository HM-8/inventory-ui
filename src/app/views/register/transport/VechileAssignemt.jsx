import React, { useEffect } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'
import {
    deleteAssignmentInfo,
    getallAssignments,
} from 'app/redux/actions/VehicleAction'

import { useDispatch, useSelector } from 'react-redux'
import { EditButton } from 'app/views/material-kit/buttons/EditButton'
import { DeleteButton } from 'app/views/material-kit/buttons/DeleteButton'

const columns = [
    { id: 'driver', label: 'Driver Name' },
    { id: 'vehicle', label: 'Vehicle Name' },
    { id: 'startingKilometer', label: 'Starting Kilometer' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'endDate', label: 'End Date' },
    { id: 'status', label: 'Status' },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]
const url = '/transport/Vehicle-assignment/add'

function createData(
    driver,
    vehicle,
    startingKilometer,
    startDate,
    endDate,
    status,
    edit,
    del
) {
    return {
        driver: driver,
        vehicle: vehicle,
        startingKilometer: startingKilometer,
        startDate: startDate,
        endDate: endDate,
        status: status,
        edit: edit,
        del: del,
    }
}

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

const VehicleAssignment = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallAssignments())
    }, [])

    const { assignments } = useSelector((state) => state.vehicle)

    console.log('Branches', assignments)

    useEffect(() => {
        localStorage.setItem('ASSIGNMENTS_INFO', JSON.stringify(assignments))
    }, [assignments])

    const rows = assignments.map((item, index) => {
        const container = {}
        createData(
            (container.driver = item.driver),
            (container.vehicle = item.vehicle),
            (container.startingKilometer = item.startingKilometer),
            (container.startDate = item.startDate),
            (container.endDate = item.endDate),
            (container.status = item.status),
            (container.edit = <EditButton url={`${url}/?${index}`} state='edit'/>),
            (container.del = <DeleteButton action={deleteAssignmentInfo(item.id)} />)
        )
        return container
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Transport', path: '/dashboard' },
                        { name: 'Vehicle Assignment' },
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
                <Grid item>
                    <TableButton buttonText="Assign" url={url} />
                </Grid>
            </Grid>
            <SimpleCard title="Vehicle Assignment">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default VehicleAssignment
