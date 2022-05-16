import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

// const AddEmployee = Loadable(lazy(() => import('./AddEmployee')))
const Products= Loadable(lazy(()=>import('./Products')))
const Branch= Loadable(lazy(()=>import('./Branch')))
const Settings= Loadable(lazy(()=>import('./Settings')))
const NewBranch= Loadable(lazy(()=>import('./AddBranch')))

const employeeRoutes = [
    {
        path: '/general/products',
        element: <Products />,
    },
    {
        path: '/general/NewBranch',
        element: <NewBranch />,
    },
    {
        path: '/general/branch',
        element: <Branch />,
    },
    {
        path: '/general/settings',
        element: <Settings />,
    },
]

export default employeeRoutes