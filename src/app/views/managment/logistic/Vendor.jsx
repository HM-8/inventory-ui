import React from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid } from '@mui/material'
import TableButton from '../../material-kit/buttons/LinkButton'

import rows from '../../../utils/data/AssignedVehicles.json'

const columns = [
    // Vendor Name
    // Vendor Type - Dropdown
    // Fuel
    // Service/maintenance
    // Other 
    // [if other, add new vendor type]
    // Contact Person  Full Name (text field)
    // First Name
    // Last Name
    // Middle Name
    // Telephone
    // Mobile No.
    // Company Tel. No.
    // Email
    // Company Email
    // Personal Email
    // Company Website
    // Company Address
    // House No.
    // Kebele
    // Wereda
    // Subcity
    // City
    // Area name (optional)
    
    


    { id: 'vendor_name', label: 'Vendor Name' },
    { id: 'Vendor_type', label: 'Vendor Type' },
    { id: 'First_name', label: 'First Name' },
     
    
    { id: 'Company-Tel', label: 'C. Tel ' },
    { id: 'pemail', label: 'P. Email' },
    { id: 'cemail', label: 'C. Email' },
    { id: 'cwebsite', label: 'C. website' },

   
    { id: 'houeseno', label: ' Mobile No' },
    { id: 'kebele', label: 'Kebele' }, 
    { id: 'wereda', label: 'Wereda' },
   
    { id: 'city', label: 'City' },
 
   
    

]
const url = '/logistic/vendor/new-add';

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

const Vendors = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Vendors Info' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid container direction="row" spacing={2} justifyContent="flex-end">
                <Grid item>
                    <TableButton buttonText="Add New Vendor" url={url}/>
                </Grid>
            </Grid>
            <SimpleCard title="Vendor List">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Vendors
