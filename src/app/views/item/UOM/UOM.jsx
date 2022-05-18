import React from 'react'
// import PaginationTable from '../../../material-kit/tables/PaginationTable'
import PaginationTable from '../../material-kit/tables/PaginationTable'

import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button, Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import data from '../../../utils/data/UOM.json'
import AddUOM from './NewUOM'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import FormDialog from 'app/views/material-kit/dialog/FormDialog'

const columns = [
    { id: 'measurementunit', label: 'Measurement Unit' },
    { id: 'abbreviation', label: 'Abbreviation' },
    { id: 'description', label: 'Description' },
    { id: 'edit', label: '' ,minWidth: 10 },
    { id: 'del', label: '',minWidth: 10  },
]

function createData(measurementunit,abbreviation, description,edit, del) {
    return {
        measurementunit: measurementunit,
        abbreviation: abbreviation,
        description:description,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.measurementunit = item.measurementunit),
        (container.abbreviation = item.abbreviation),
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

const url = '/item/New-uom';


const UOM = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item', path: '/dashboard' },
                        { name: 'UOM' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    {/* <TableButton buttonText="Add UOM" url={url}/> */}
                    <FormDialog title={'New UOM'} buttonText={'Add Row'}><AddUOM /></FormDialog>
                </Grid>
            </Grid>
            <SimpleCard title="UOM List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default UOM
