import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

// const AddEmployee = Loadable(lazy(() => import('./AddEmployee')))
const Products= Loadable(lazy(()=>import('./inventory/Products')))
const Branch= Loadable(lazy(()=>import('./General/branch/Branch')))
const Settings= Loadable(lazy(()=>import('../settings/Inventory')))
const NewBranch= Loadable(lazy(()=>import('./General/branch/AddBranch')))
const Company= Loadable(lazy(()=>import('./General/company/Company')))
const Department= Loadable(lazy(()=>import('./General/department/Department')))
const Creation= Loadable(lazy(()=>import('./hr/NewEmployee')))
const SalaryDetails= Loadable(lazy(()=>import('./hr/SalaryDetails')))
const Registration = Loadable(lazy(()=>import('./transport/VehicleRegistration')))
const Assignment= Loadable(lazy(()=>import('./transport/VechileAssignemt')))


const RegisterRouter = [
    {
        path: '/inventory/product',
        element: <Products />,
    },
    {
        path: '/general/newbranch',
        element: <NewBranch />,
    },
    {
        path: '/general/branch',
        element: <Branch />,
    },
    {
        path: '/general/company',
        element: <Company />,
    },
    {
        path: '/general/department',
        element: <Department />,
    },
    {
        path: '/settings/tranport',
        element: <Settings />,
    },
    {
        path: '/hr/empCreation',
        element: <Creation />,
    },
    {
        path: '/hr/salaryDetails',
        element: <SalaryDetails />,
    },{
        path: '/transport/regsitration',
        element: <Registration />,
    },{
        path: '/transport/assignment',
        element: <Assignment />,
    },
]

export default RegisterRouter