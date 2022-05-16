import React, { useState } from 'react'
import PaginationTable from '../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid,Button } from '@mui/material'
import NewProducts from './NewProducts'
import rows from '../../utils/data/employmentType.json'

const columns = [
    { id: 'product-name', label: 'Product Name' },
    { id: 'product-type', label: 'Product Type' },
    { id: 'description', label: 'Description' },
]
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
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Products = () => {
    const [show, setShow] = useState(false)

    const handleButton = () => {
        setShow(!show)
        console.log(show);
    }
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
                        { name: 'Products' },
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
                <Grid item xs={6}>
                    <div>{show ? <NewProducts /> : null}</div>
                    </Grid>
                <Grid item>
                <StyledButton variant="contained" color="primary" onClick={() => handleButton()}>
                    Add Row
                </StyledButton>
                </Grid>
            </Grid>
            <SimpleCard title="Pagination Table">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Products
