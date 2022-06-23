import React, { useEffect, useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'
import axios from 'axios'
import SimpleMap from "./SimpleMap"

const url = '/logistic/vehicle-history/new'

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


const VehicleHistory = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4040/v1/vehicle').then((res) => {
            console.log(res.data)
            setVehicles(res.data)
        })
    }, [])

   
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Vehicle Map' },
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
            <SimpleCard title="Vechicle Service Tracking">
            <SimpleMap vehicles={vehicles}/>
            </SimpleCard>
        </Container>
    )
}

export default VehicleHistory
