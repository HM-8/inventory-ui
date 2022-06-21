import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import NewProducts from './NewProducts'
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
    { id: 'productname', label: 'Product Name', minWidth: 10 },
    { id: 'producttype', label: 'Product Type', minWidth: 10 },
    { id: 'description', label: 'Description', minWidth: 10 },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(productname, producttype, description, edit, del) {
    return {
        productname: productname,
        producttype: producttype,
        description: description,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.productname = item.productname),
        (container.producttype = item.producttype),
        (container.description = item.description),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Products = () => {
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
                <Grid item xs={12}>
                    <div>{show ? <NewProducts /> : null}</div>
                </Grid>
                <Grid item>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={() => handleButton()}
                    >
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
