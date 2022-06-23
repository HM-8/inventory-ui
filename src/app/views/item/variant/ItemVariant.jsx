import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'

import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button, Grid } from '@mui/material'
import AddVariant from './AddVariatn'
import data from '../../../utils/data/variants.json'
import FormDialog from 'app/views/material-kit/dialog/FormDialog'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const columns = [
    { id: 'attributename', label: 'Attribute Name' },
    { id: 'options', label: 'Options' },
    { id: 'description', label: 'Description' },
    { id: 'edit', label: '' ,minWidth: 10 },
    { id: 'del', label: '',minWidth: 10  },
]

function createData(attributename,options, description,edit, del) {
    return {
        attributename: attributename,
        options: options,
        description:description,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.attributename = item.attributename),
        (container.options = item.options),
        (container.description = item.description),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

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

const ItemVariant = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item', path: '/dashboard' },
                        { name: 'Suppler' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <FormDialog title={'New Variant'} buttonText={'Add Row'}><AddVariant /></FormDialog>
                </Grid>
            </Grid>
            <SimpleCard title="Item Variants">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default ItemVariant
