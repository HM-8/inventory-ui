import { Grid } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import { deleteDesignationInfo, getallDesignations } from 'app/redux/actions/DesignationAction'
import { DeleteButton } from 'app/views/material-kit/buttons/DeleteButton'
import { EditButton } from 'app/views/material-kit/buttons/EditButton'
import TableButton from 'app/views/material-kit/buttons/LinkButton'
import PaginationTable from 'app/views/material-kit/tables/PaginationTable'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const url = '/hr/new-designation'

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
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
    { id: 'requiredSkills', label: 'Required Skills' },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(
    name,
    description,
    requiredSkills,
    edit, 
    del
) {
    return {
        name: name,
        description: description,
        requiredSkills: requiredSkills,
        edit: edit,
        del: del,
    }
}

const Designation = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallDesignations())
    }, [])
    const { designations } = useSelector((state) => state.designation)

    console.log('Designations', designations)

    useEffect(() => {
        localStorage.setItem('DESIGNATIONS_INFO', JSON.stringify(designations))
    }, [designations])

    const rows = designations.map((item, index) => {
        const container = {}
        createData(
            (container.name = item.name),
            (container.description = item.description),
            (container.requiredSkills = item.requiredSkills),
            (container.edit = <EditButton url={`${url}/?${index}`} state='edit'/>),
            (container.del = <DeleteButton action={deleteDesignationInfo(item.id)} />)
        )
        return container
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'HR', path: '/dashboard' },
                        { name: 'Designation' },
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
                            <TableButton buttonText="Add Designation" url={url} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SimpleCard title="Designations">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Designation
