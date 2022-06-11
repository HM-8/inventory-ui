import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid,Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'

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
    { id: 'ItemName ', label: 'Item Name',minWidth: 10  },
    { id: 'Qty ', label: 'Bin No',minWidth: 10  },
    { id: 'Length  ', label: 'Min Quantity  ',minWidth: 10  },
    { id: 'Width  ', label: 'Max Quantity ',minWidth: 10  },
    { id: 'Height  ', label: 'Height  ',minWidth: 10  },
    { id: 'Weight  ', label: 'Selling Price',minWidth: 10  },
    { id: 'Branch  ', label: 'Issued ',minWidth: 10  },
    { id: 'Address ', label: 'Address ',minWidth: 10  },
    { id: 'MobileNo ', label: 'Item Name',minWidth: 10  },
    { id: 'Delivery ', label: 'Bin No',minWidth: 10  },
    { id: 'Address  ', label: 'Min Quantity  ',minWidth: 10  },
    { id: 'Requestor  ', label: 'Max Quantity ',minWidth: 10  },
    { id: 'Head  ', label: 'Head  ',minWidth: 10  },
    { id: 'Approver  ', label: 'Selling Price',minWidth: 10  },
    { id: 'MobileNo  ', label: 'Issued ',minWidth: 10  },
    { id: 'To ', label: 'To ',minWidth: 10  },
    ]

function createData(ItemName ,Qty , Length  , Width ,Height ,Weight  ,Branch,MobileNo ,Delivery , Address  , Requestor ,Head ,Approver ,To) {
    return {
        ItemName : ItemName ,
        Qty : Qty ,
        Length  :Length  ,
        Address:Address,
        Branch :Branch ,
        Weight  :Weight  ,
        Height :Height ,
        Width :Width,
        MobileNo : MobileNo ,
        Delivery : Delivery ,
        Address  :Address  ,
        To:To,
        MobileNo :MobileNo ,
        Approver  :Approver  ,
        Head :Head ,
        Requestor :Requestor       
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.ItemName  = item.ItemName ),
        (container.Qty  = item.Qty ),
        (container.Length   = item.Length  ),
        (container.Branch  = item.Branch ),
        (container.Weight   = item.Weight  ),
        (container.Height  = item.Height ),
        (container.Width  = item.Width ),
        (container.Address  = item.Address ),
        (container.MobileNo  = item.MobileNo ),
        (container.Delivery  = item.Delivery ),
        (container.Address   = item.Address  ),
        (container.MobileNo  = item.MobileNo ),
        (container.Approver   = item.Approver  ),
        (container.Head  = item.Head ),
        (container.Requestor  = item.Requestor ),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const ItemTransfer = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Item Transfer Report  ' },
                    ]}
                />      
            </div>
            <Box py="1px" />
            <SimpleCard title="Item Transfer Report">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default ItemTransfer
