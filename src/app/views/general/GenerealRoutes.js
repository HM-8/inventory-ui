import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

// const AddEmployee = Loadable(lazy(() => import('./AddEmployee')))
const Products= Loadable(lazy(()=>import('./Products')))
const Branchs= Loadable(lazy(()=>import('./Branch')))
const Settings= Loadable(lazy(()=>import('./Settings')))

const employeeRoutes = [
    {
        path: '/general/products',
        element: <Products />,
    },
    {
        path: '/general/branch',
        element: <Branchs />,
    },
    {
        path: '/general/settings',
        element: <Settings />,
    },
]

export default employeeRoutes