import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Products= Loadable(lazy(()=>import('./inventory/Products')))
const Branch= Loadable(lazy(()=>import('./General/branch/Branch')))
const Settings= Loadable(lazy(()=>import('../settings/Inventory')))
const NewBranch= Loadable(lazy(()=>import('./General/branch/AddBranch')))
const Company= Loadable(lazy(()=>import('./General/company/Company')))
const EditCompany= Loadable(lazy(()=>import('./General/company/EditCompanyInfo')))
const Department= Loadable(lazy(()=>import('./General/department/Department')))
const Creation= Loadable(lazy(()=>import('./hr/NewEmployee')))
const Registration = Loadable(lazy(()=>import('./transport/VehicleRegistration')))
const Assignment= Loadable(lazy(()=>import('./transport/VechileAssignemt')))
const NewAssignment= Loadable(lazy(()=>import('./transport/AddVehicleAssignment')))
const GeneralSettings= Loadable(lazy(()=>import('./General/Settings')))
const EmployeeDesignation = Loadable(lazy(()=>import('../employee/designation/EmployeeDesignation')))
const AddEmployeeDesignation = Loadable(lazy(()=>import('../employee/designation/AddEmployeeDesignation')))
const EditDepartment = Loadable(lazy(()=>import('./General/department/EditDepartment')))


const RegisterRouter = [
    {
        path: '/inventory/product',
        element: <Products />,
    },
    {
        path: '/hr/newbranch',
        element: <NewBranch />,
    },
    {
        path: '/hr/branch',
        element: <Branch />,
    },
    {
        path: '/hr/department',
        element: <Department />,
    },
    {
        path: '/hr/new-designation',
        element: <AddEmployeeDesignation />,
    },
    {
        path: '/hr/designation',
        element: <EmployeeDesignation />,
    },
    {
        path: '/general/company',
        element: <Company />,
    },
    {
        path: '/general/settings',
        element: <GeneralSettings />,
    },
    {
        path: '/general/edit-company',
        element: <EditCompany />,
    },
    {
        path: '/hr/edit-department',
        element: <EditDepartment />,
    },
    {
        path: '/settings/transport',
        element: <Settings />,
    },
    {
        path: '/hr/empCreation',
        element: <Creation />,
    },
    {
        path: '/transport/registration',
        element: <Registration />,
    },
    {
        path: '/transport/assignment',
        element: <Assignment />,
    },
    {
        path: '/transport/Vehicle-assignment/add',
        element: <NewAssignment />,
    },
]

export default RegisterRouter