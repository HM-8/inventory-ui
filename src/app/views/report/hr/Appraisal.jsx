import React, { useState } from 'react'
import PaginationTable from '../../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid, Button } from '@mui/material'
import data from '../../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import TableButton from '../../material-kit/buttons/LinkButton'

const url = '/general/NewAppraisal'

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
    { id: 'PeerDocument', label: 'Questions', minWidth: 10 },
    { id: 'reviews', label: 'No of Reviews ', minWidth: 10 },
    { id: 'value', label: 'Average value earned', minWidth: 10 },
]

const columns2 = [
    { id: 'CustomerDocument', label: 'Questions', minWidth: 10 },
    { id: 'reviews2', label: 'No of Reviews ', minWidth: 10 },
    { id: 'value2', label: 'Average value earned', minWidth: 10 },

]
const columns3 = [
  { id: 'DepartmentDocument', label: 'Questions', minWidth: 10 },
  { id: 'reviews3', label: 'No of Reviews ', minWidth: 10 },
  { id: 'value3', label: 'Average value earned', minWidth: 10 },

]
function createData(PeerDocument, reviews, value, CustomerDocument, DepartmentDocument,reviews2,reviews3) {
    return {
        PeerDocument: PeerDocument,
        reviews: reviews,
        value: value,
        CustomerDocument: CustomerDocument,
        DepartmentDocument: DepartmentDocument,
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.PeerDocument = item.PeerDocument),
        (container.reviews = item.reviews),
        (container.value = item.value),
    )
    return container
})
const rows2 = data.map((item, index) => {
  const container = {}
  createData(
      (container.PeerDocument = item.PeerDocument),
      (container.reviews = item.reviews),
      (container.value = item.value),
  )
  return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const Appraisal = () => {
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
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Appraisal' },
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
            <Grid item xs={12} style={{marginBottom:'2rem'}}>
                <SimpleCard title="Peer Review">
                    <PaginationTable columns={columns} rows={rows} />
                </SimpleCard>
            </Grid>

            <Grid item xs={12} style={{marginBottom:'2rem'}}>
                <SimpleCard title="Customer review" >
                    <PaginationTable columns={columns2} rows={rows} />
                </SimpleCard>
            </Grid>

            <Grid item xs={12}>
                <SimpleCard title="Departement Review">
                    <PaginationTable columns={columns3} rows={rows} />
                </SimpleCard>
            </Grid>
        </Container>
    )
}

export default Appraisal
