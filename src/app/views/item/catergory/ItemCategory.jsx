import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'

import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/category.json'

const columns = [
    { id: 'categroy-name', label: 'Categroy Name' },
    { id: 'subcategory', label: 'Sub Category' },
    { id: 'description', label: 'Description' },
]
const url = '/item/Newcategory';

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

const Category = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item', path: '/dashboard' },
                        { name: 'Category' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add Category" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Category List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Category
