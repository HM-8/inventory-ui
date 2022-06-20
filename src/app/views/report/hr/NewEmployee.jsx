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
    { id: 'gender', label: 'Gender', minWidth: 10 },
    { id: 'DOB', label: 'Date Of Birth', minWidth: 10 },
    { id: 'DOJ', label: 'Date Of Joining', minWidth: 10 },
    { id: 'nationality', label: 'Nationality', minWidth: 10 },
  ]

function createData(gender, DOB, DOJ,employee,status) {
    return {
        gender: gender,
        DOB: DOB,
        DOJ: DOJ,
        employee:employee,
        status:status,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.gender = item.gender),
        (container.DOB = item.DOB),
        (container.DOJ = item.DOJ),
        (container.employee = item.employee),
        (container.status = item.status),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const NewEmployeeReport = () => {
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
                        { name: 'New Employees' },
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

export default NewEmployeeReport