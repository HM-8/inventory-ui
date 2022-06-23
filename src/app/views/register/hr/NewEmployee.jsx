import React from 'react'
import { styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import OrderForm from './OrderForm'

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

const NewEmployee = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'HR', path: '/dashboard' },
                        { name: 'Add Employee' },
                    ]}
                />
            </div>
            
            <SimpleCard title="New Employee">
            <OrderForm />
            </SimpleCard>
        </Container>
    )
}

export default NewEmployee
