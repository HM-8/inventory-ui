import React from 'react'
import EmployeeList from './EmployeeList'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

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
function Employees() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Employees', path: 'dashboard' },
                    ]}
                />
            </div>
            <SimpleCard>
                <EmployeeList />
            </SimpleCard>
        </Container>
    )
}

export default Employees
