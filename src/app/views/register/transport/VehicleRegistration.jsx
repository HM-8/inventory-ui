import React from 'react'
import { styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import BasicVehicleInfoForm from './newvehicleform/BasicVehicleInfoForm'
import StepperForm from '../../material-kit/forms/StepperForm'
import InsuranceDetail from './newvehicleform/InsuranceDetail';
import RoadFunds from './newvehicleform/RoadFunds';
import BoloDetail from './newvehicleform/BoloDetail';
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

const steps = [
    {
        id: 0,
        label: 'Basic Information',
        form: <BasicVehicleInfoForm/>,
    },
    {
        id: 1,
        label: 'Insurance Detail',
        form: <InsuranceDetail />,
    },
    {
        id: 2,
        label: 'Road Funds',
        form: <RoadFunds />,
    },
    {
        id: 3,
        label: 'Bolo Detail',
        form: <BoloDetail />,
    }
]

const VehicleRegistration = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Add Vehicle' },
                    ]}
                />
            </div>
            <SimpleCard title="stepper form">
                <OrderForm />
            </SimpleCard>
        </Container>
    )
}

export default VehicleRegistration


