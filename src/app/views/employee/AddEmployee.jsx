import React from 'react'
import { styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import PersonalInformationForm from './forms/PersonalInformationForm'
import StepperForm from '../material-kit/forms/StepperForm'

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
        label: 'Personal Information',
        form: <PersonalInformationForm/>,
    },
    {
        id: 1,
        label: 'Family Background',
        form: 'form 2',
    },
    {
        id: 2,
        label: 'Contact Details',
        form: 'form 3',
    },
    {
        id: 3,
        label: 'Emergency Contact',
        form: 'form 4',
    },
    {
        id: 4,
        label: 'Insurance',
        form: 'form 5',
    },
    {
        id: 6,
        label: 'Work Experience',
        form: 'form 6',
    },
    {
        id: 7,
        label: 'Qualifications',
        form: 'form 7',
    },
]

const AddEmployee = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Employee', path: '/dashboard' },
                        { name: 'Add Employee' },
                    ]}
                />
            </div>
            <SimpleCard title="stepper form">
                <StepperForm steps={steps} />
            </SimpleCard>
        </Container>
    )
}

export default AddEmployee


