import React, { useState } from 'react'
import PaginationTable from '../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid,Button } from '@mui/material'
import data from '../../utils/data/employmentType.json'

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
    { id: 'ItemName', label: 'Item Name',minWidth: 10  },
    { id: 'Binno', label: 'Bin No',minWidth: 10  },
    { id: 'description', label: 'Description',minWidth: 10  },
    { id: 'Subcategory ', label: 'Subcategory ',minWidth: 10  },
    { id: 'Variant ', label: 'Variant ',minWidth: 10  },
    { id: 'SellingPrice', label: 'Selling Price',minWidth: 10  },
    { id: 'Branch ', label: 'Branch ',minWidth: 10  },
    { id: 'Condition ', label: 'Condition ',minWidth: 10  },
    { id: 'Supplier ', label: 'Supplier ',minWidth: 10  },
    { id: 'Shelflife ', label: 'Shelf life ',minWidth: 10  },
    { id: 'Financial ', label: 'Financial ',minWidth: 10  },
]

function createData(ItemName,Binno, description, Subcategory,Variant,SellingPrice,Branch,Condition,Supplier,Shelflife,Financial) {
    return {
        ItemName: ItemName,
        Binno: Binno,
        description:description,
        Financial:Financial,
        Shelflife:Shelflife,
        Supplier:Supplier,
        Condition:Condition,
        Branch:Branch,
        SellingPrice:SellingPrice,
        Variant:Variant,
        Subcategory:Subcategory     
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.ItemName = item.ItemName),
        (container.Binno = item.Binno),
        (container.description = item.description),
        (container.Financial = item.Financial),
        (container.Shelflife = item.Shelflife),
        (container.Supplier = item.Supplier),
        (container.Condition = item.Condition),
        (container.Branch = item.Branch),
        (container.SellingPrice = item.SellingPrice),
        (container.Variant = item.Variant),
        (container.Subcategory = item.Subcategory),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Yearly = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Yearly' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <SimpleCard title="Pagination Table">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Yearly
