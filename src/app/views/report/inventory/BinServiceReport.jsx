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
    { id: 'Binno', label: 'Bin No',minWidth: 10  },
    { id: 'MinimumQuantity  ', label: 'Quantity produced',minWidth: 10  },
    { id: 'Balance ', label: 'Balance ',minWidth: 10  },
    { id: 'Remarks   ', label: 'Remarks    ',minWidth: 10  },
    { id: 'Shelflife ', label: 'End of life ',minWidth: 10  },
]

function createData(BinLocation ,Binno, MinimumQuantity  , MaximumQuantity,Date,QuantityReceived ,QuantityIssued,Balance,Remarks    ,Shelflife,Financial) {
    return {
        BinLocation : BinLocation ,
        Binno: Binno,
        MinimumQuantity  :MinimumQuantity  ,
        Financial:Financial,
        Shelflife:Shelflife,
        Remarks :Remarks ,
        Balance:Balance,
        QuantityIssued:QuantityIssued,
        QuantityReceived :QuantityReceived ,
        Date:Date,
        MaximumQuantity:MaximumQuantity     
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.BinLocation  = item.BinLocation ),
        (container.Binno = item.Binno),
        (container.MinimumQuantity   = item.MinimumQuantity  ),
        (container.Financial = item.Financial),
        (container.Shelflife = item.Shelflife),
        (container.Remarks   = item.Remarks   ),
        (container.Balance = item.Balance),
        (container.QuantityIssued = item.QuantityIssued),
        (container.QuantityReceived  = item.QuantityReceived ),
        (container.Date = item.Date),
        (container.MaximumQuantity = item.MaximumQuantity),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const BinService = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Bin Service card Report  ' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <SimpleCard title="Bin Service card Report">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default BinService
