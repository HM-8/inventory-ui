import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

//const Analytics = Loadable(lazy(() => import('./Analytics')))

const reportRoutes = [
    {
        path: '/report',
        //element: <Analytics />,
        //auth: authRoles.admin,
    },
]

export default reportRoutes