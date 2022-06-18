// import React from 'react'
// import PaginationTable from '../../../material-kit/tables/PaginationTable'
// import { Breadcrumb, SimpleCard } from 'app/components'
// import { Box, styled } from '@mui/system'
// import { Grid } from '@mui/material'
import TableButton from '../../../material-kit/buttons/LinkButton'

// import rows from '../../../../utils/data/Branch.json'

// const columns = [
//     { id: 'location', label: 'Location' },
//     { id: 'branch-manager', label: 'Branch Manager' },
//     { id: 'telephone', label: 'Telephone' },
//     { id: 'email', label: 'Email' },
//     { id: 'type', label: 'Inventory Type' }

// ]
// const url = '/general/NewBranch';

// const Container = styled('div')(({ theme }) => ({
//     margin: '30px',
//     [theme.breakpoints.down('sm')]: {
//         margin: '16px',
//     },
//     '& .breadcrumb': {
//         marginBottom: '30px',
//         [theme.breakpoints.down('sm')]: {
//             marginBottom: '16px',
//         },
//     },
// }))

// const Branch = () => {
//     return (
//         <Container>
//             <div className="breadcrumb">
//                 <Breadcrumb
//                     routeSegments={[
//                         { name: 'General', path: '/dashboard' },
//                         { name: 'Branch' },
//                     ]}
//                 />
//             </div>
//             <Box py="1px" />
//             <Grid container direction="row" spacing={2} justifyContent="flex-end">
//                 <Grid item>
//                     <TableButton buttonText="Add Branch" url={url}/>
//                 </Grid>
//             </Grid>
//             <SimpleCard title="Branches">
//                 <PaginationTable columns={columns} rows={rows} />
//             </SimpleCard>
//         </Container>
//     )
// }

// export default Branch

import React, { useState } from 'react'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
const url = '/general/NewBranch';

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
    { id: 'location', label: 'Location' },
    { id: 'branchManager', label: 'Branch Manager' },
    { id: 'telephone', label: 'Telephone' },
    { id: 'email', label: 'Email' },
    { id: 'type', label: 'Inventory Type' },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
]

function createData(location, branchManager, telephone, email,type,edit, del) {
    return {
        location: location,
        branchManager: branchManager,
        telephone: telephone,
        email:email,
        type:type,
        edit: edit,
        del: del,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.location = item.location),
        (container.branchManager = item.branchManager),
        (container.telephone = item.telephone),
        (container.email = item.email),
        (container.type = item.type),
        (container.edit = <EditIcon />),
        (container.del = <DeleteIcon />)
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Branch = () => {
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
                        { name: 'Branch' },
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
                {/* <Grid item xs={12}>
                    <BracodeReader />
                </Grid> */}
                {/* <Grid item xs={12}>
                    <div>{show ? <NewProducts /> : null}</div>
                </Grid> */}
                <Grid item>
                    <Grid item>
                    <Grid item>
                     <TableButton buttonText="Add Branch" url={url}/>
                 </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SimpleCard title="Pagination Table">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Branch
