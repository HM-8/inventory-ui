import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AddEmployee = Loadable(lazy(() => import('./AddEmployee')))

const EmploymentType = Loadable(lazy(() => import('./employment-type/EmploymentType')))
const AddEmploymentType = Loadable(lazy(() => import('./employment-type/AddEmploymentType')))

const EmployeeDesignation = Loadable(lazy(() => import('./designation/EmployeeDesignation')))
const AddEmployeeDesignation = Loadable(lazy(() => import('./designation/AddEmployeeDesignation')))

const EmployeeAppraisal = Loadable(lazy(() => import('./EmployeeAppraisal')))
const Branch = Loadable(lazy(() => import('./Branch')))
const Department = Loadable(lazy(() => import('./Department')))

const employeeRoutes = [
    {
        path: '/employee/add-employee',
        element: <AddEmployee />,
    },
    {
        path: '/employee/employment-type',
        element: <EmploymentType />,
    },
    {
        path: '/employee/employment-type/add',
        element: <AddEmploymentType />,
    },
    {
        path: '/employee/employee-designation',
        element: <EmployeeDesignation />,
    },
    {
        path: '/employee/employee-designation/add',
        element: <AddEmployeeDesignation />,
    },
    {
        path: '/employee/employee-appraisal',
        element: <EmployeeAppraisal />,
    },
    {
        path: '/employee/branch',
        element: <Branch />,
    },
    {
        path: '/employee/department',
        element: <Department />,
    }
]

export default employeeRoutes