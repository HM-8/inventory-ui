import React from 'react'
import { styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import StepperForm from '../../material-kit/forms/StepperForm'

import PersonalDetails from './employeeCreation/PersonalDetails'
import FamilyBackground from './employeeCreation/FamilyBackground';
import Insurance from './employeeCreation/InsuranceDetail';
import ContactDetails from './employeeCreation/ContactsDetails';
import Qualification from './employeeCreation/EducationalQualification';
import Experience  from './employeeCreation/WorkExperience';
import EmergencyContact from './employeeCreation/EmergencyContact';
 
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
        label: 'Personal Details',
        form: <PersonalDetails/>,
    },
    {
        id: 1,
        label: 'Family Background ',
        form: <FamilyBackground />,
    },
    {
        id: 2,
        label: 'Insurance',
        form: <Insurance />,
    },
    {
        id: 3,
        label: 'Contact Details',
        form: <ContactDetails />,
    },
    {
        id: 4,
        label: 'Educational Qualification',
        form: <Qualification />,
    },
    {
        id: 5,
        label: 'Work Experience ',
        form: <Experience />,
    },
    {
        id: 6,
        label: 'Emergency Contact ',
        form: <EmergencyContact />,
    }

]

const NewEmployee = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Add Employee' },
                    ]}
                />
            </div>
            <SimpleCard title="New Employee">
                <StepperForm steps={steps} />
            </SimpleCard>
        </Container>
    )
}

export default NewEmployee


