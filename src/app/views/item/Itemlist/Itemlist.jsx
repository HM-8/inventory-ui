import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TableButton from '../../material-kit/buttons/LinkButton'

import Items from './Items'

const url = '/inventory/item/newitem';

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

const ItemList = () => {
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
                        { name: 'Items', path: '/dashboard' },
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
                     <TableButton buttonText="Add Item" url={url}/>
                </Grid>
                </Grid>
            </Grid>
            <SimpleCard>
                {/* <PaginationTable columns={columns} rows={rows} /> */}
                <Grid><Items /></Grid>
            </SimpleCard>
        </Container>
    )
}

export default ItemList
