import React, { useEffect } from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button, Grid } from '@mui/material'
import FormDialog from 'app/views/material-kit/dialog/FormDialog'
import AddDepartment from './NewDepartment'
import { useDispatch, useSelector } from 'react-redux'
import { EditButton } from 'app/views/material-kit/buttons/EditButton'
import { DeleteButton } from 'app/views/material-kit/buttons/DeleteButton'
import {
    deleteDepartmentInfo,
    getallDepartments,
} from 'app/redux/actions/DepartmentAction'

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
const url = 'null'
const columns = [
    { id: 'name', label: 'Department Name', minWidth: 10 },
    { id: 'head', label: 'Department Head', minWidth: 10 },
    { id: 'description', label: 'Description', minWidth: 10 },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(name, head, description, edit, del) {
    return {
        name: name,
        head: head,
        description: description,
        edit: edit,
        del: del,
    }
}

const Department = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallDepartments())
    }, [])
    const { departments } = useSelector((state) => state.department)

    console.log('Departments', departments)

    useEffect(() => {
        localStorage.setItem('DEPARTMENTS_INFO', JSON.stringify(departments))
    }, [departments])

    const rows = departments.map((item, index) => {
        const container = {}
        createData(
            (container.name = item.name),
            (container.head = item.head),
            (container.description = item.description),
            (container.edit = (
                <Button
                    onClick={(index) => {
                        console.log('Add modal here')
                    }}
                >
                    <EditButton url={null} state="edit" />
                </Button>
            )),
            (container.del = (
                <DeleteButton action={deleteDepartmentInfo(item.id)} />
            ))
        )
        return container
    })
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
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
                        <Grid item>
                            <FormDialog
                                title={'Add Department'}
                                buttonText={'Add Row'}
                            >
                                <AddDepartment />
                            </FormDialog>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SimpleCard title="Departments">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Department
