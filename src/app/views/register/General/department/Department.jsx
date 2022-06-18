import React, { useState } from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
// import BracodeReader from './BracodeReader'
import FormDialog from 'app/views/material-kit/dialog/FormDialog'

import AddDepartment from './NewDepartment'
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
    { id: 'departmentName', label: 'Department Name', minWidth: 10 },
    { id: 'departmentHead', label: 'Department Head', minWidth: 10 },
    { id: 'description', label: 'Description', minWidth: 10 },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(departmentName, departmentHead, description, edit, del) {
    return {
        departmentName: departmentName,
        departmentHead: departmentHead,
        description: description,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.departmentName = item.departmentName),
        (container.departmentHead = item.departmentHead),
        (container.description = item.description),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Deparment = () => {
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
                        { name: 'Inventory', path: '/dashboard' },
                        { name: 'Department' },
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
                <Grid item>
                    <FormDialog title={'New Variant'} buttonText={'Add Row'}><AddDepartment /></FormDialog>
                </Grid>
                </Grid>
            </Grid>
            <SimpleCard title="Pagination Table">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Deparment
