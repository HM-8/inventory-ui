import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

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
        //auth: authRoles.admin,
    },
    {
        path: '/employee/employment-type',
        element: <EmploymentType />,
        //auth: authRoles.admin,
    },
    {
        path: '/employee/employment-type/add',
        element: <AddEmploymentType />,
        //auth: authRoles.admin,
    },
    {
        path: '/employee/employee-designation',
        element: <EmployeeDesignation />,
        //auth: authRoles.admin,
    },
    {
        path: '/employee/employee-designation/add',
        element: <AddEmployeeDesignation />,
        //auth: authRoles.admin,
    },
    {
        path: '/employee/employee-appraisal',
        element: <EmployeeAppraisal />,
        //auth: authRoles.admin,
    },
    {
        path: '/employee/branch',
        element: <Branch />,
        //auth: authRoles.admin,
    },
    {
        path: '/employee/department',
        element: <Department />,
        //auth: authRoles.admin,
    }
]

export default employeeRoutes