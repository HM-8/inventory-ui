import React, { useState } from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TableButton from '../../../material-kit/buttons/LinkButton'

const url = '/general/NewAppraisal'

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
    { id: 'PeerDocument', label: 'Questions', minWidth: 10 },
    { id: 'reviews', label: 'No of Reviews ', minWidth: 10 },
    { id: 'value', label: 'Average value earned', minWidth: 10 },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

const columns2 = [
    { id: 'PeerDocument', label: 'Questions', minWidth: 10 },
    { id: 'reviews', label: 'No of Reviews ', minWidth: 10 },
    { id: 'value', label: 'Average value earned', minWidth: 10 },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(PeerDocument, reviews, value, edit, del) {
    return {
        PeerDocument: PeerDocument,
        reviews: reviews,
        value: value,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.PeerDocument = item.PeerDocument),
        (container.reviews = item.reviews),
        (container.value = item.value),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Appraisal = () => {
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
                        <TableButton buttonText="Add Appraisal" url={url} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <SimpleCard title="Peer Review">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>

            <Grid item>
                    <Grid item>
                        <TableButton buttonText="Add Appraisal" url={url} />
                    </Grid>
                </Grid>
            <Grid item xs={12}>
                <SimpleCard title="Customer review">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>

            <Grid item>
                    <Grid item>
                        <TableButton buttonText="Add Appraisal" url={url} />
                    </Grid>
                </Grid>
            <Grid item xs={12}>
                <SimpleCard title="Departement Review">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>
        </Container>
    )
}

export default Appraisal
