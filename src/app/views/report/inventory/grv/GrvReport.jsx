import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import {  Button } from '@mui/material'
import GrvTable from './GrvTable'

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

const Giv = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'GRV card Report  ' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <SimpleCard title="Giv card Item Report">
                <GrvTable />
            </SimpleCard>
        </Container>
    )
}

export default Giv
