import AddCategory from './NewCategory'
import FormDialog from 'app/views/material-kit/dialog/FormDialog'
import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


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
    { id: 'categroyName', label: 'Categroy Name' },
    { id: 'subcategory', label: 'Sub Category' },
    { id: 'description', label: 'Description' },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(categroyName, subcategory, description, email, edit, del) {
    return {
        categroyName: categroyName,
        subcategory: subcategory,
        description: description,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.categroyName = item.categroyName),
        (container.subcategory = item.subcategory),
        (container.description = item.description),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Category = () => {
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
                        { name: 'Category' },
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
                     <FormDialog title={'New Variant'} buttonText={'Add Row'}><AddCategory /></FormDialog>
                 </Grid>
                </Grid>
            </Grid>
            <SimpleCard title="Category List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Category
