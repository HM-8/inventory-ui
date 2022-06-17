import React, { useState } from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TableButton from '../../../material-kit/buttons/LinkButton'

const url = '/general/NewTransfer'

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
    { id: 'CurrentBranch', label: 'Current Branch', minWidth: 10 },
    { id: 'NewBranch', label: 'New Branch ', minWidth: 10 },
    { id: 'SuggestedDate', label: 'Suggested Date', minWidth: 10 },
    { id: 'ApprovedDate', label: 'Approved Date', minWidth: 10 },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(CurrentBranch, NewBranch, SuggestedDate,ApprovedDate ,edit, del) {
    return {
        CurrentBranch: CurrentBranch,
        NewBranch: NewBranch,
        SuggestedDate: SuggestedDate,
        ApprovedDate:ApprovedDate,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.CurrentBranch = item.CurrentBranch),
        (container.NewBranch = item.NewBranch),
        (container.SuggestedDate = item.SuggestedDate),
        (container.ApprovedDate = item.ApprovedDate),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Transfer = () => {
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
                        { name: 'Transfers' },
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
                        <TableButton buttonText="New Transfer" url={url} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <SimpleCard title="Promotions">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>
        </Container>
    )
}

export default Transfer