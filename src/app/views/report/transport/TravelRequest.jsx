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
    { id: 'EmployeeNo ', label: 'Item Name',minWidth: 10  },
    { id: 'Department ', label: 'Bin No',minWidth: 10  },
    { id: 'Address  ', label: 'Min Quantity  ',minWidth: 10  },
    { id: 'Requestor  ', label: 'Max Quantity ',minWidth: 10  },
    { id: 'Head  ', label: 'Head  ',minWidth: 10  },
    { id: 'Approver  ', label: 'Selling Price',minWidth: 10  },
    { id: 'From  ', label: 'Issued ',minWidth: 10  },
    { id: 'To ', label: 'To ',minWidth: 10  },
    ]

function createData(EmployeeNo ,Department , Address  , Requestor ,Head ,Approver  ,From ,To) {
    return {
        EmployeeNo : EmployeeNo ,
        Department : Department ,
        Address  :Address  ,
        To:To,
        From :From ,
        Approver  :Approver  ,
        Head :Head ,
        Requestor :Requestor      
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.EmployeeNo  = item.EmployeeNo ),
        (container.Department  = item.Department ),
        (container.Address   = item.Address  ),
        (container.From  = item.From ),
        (container.Approver   = item.Approver  ),
        (container.Head  = item.Head ),
        (container.Requestor  = item.Requestor ),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const TravelRequest = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Travel Request Report  ' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <SimpleCard title="Trave Request Report">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default TravelRequest
