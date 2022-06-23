import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'

const url = '/general/NewPromotion'

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
    { id: 'CurrentDesignation', label: 'Current Designation', minWidth: 10 },
    { id: 'changeddesignation', label: 'changed designation ', minWidth: 10 },
    { id: 'SuggestedDate', label: 'Suggested Date', minWidth: 10 },
    { id: 'ApprovedDate', label: 'Approved Date', minWidth: 10 },
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
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Promotion = () => {
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
                        { name: 'Promotions' },
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

export default Promotion
