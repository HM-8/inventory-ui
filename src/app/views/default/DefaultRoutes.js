import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

const Analytics = Loadable(lazy(() => import('../dashboard/Analytics')))

const defaultRoutes = [
    {
        path: '/set-defaults',
        element: <Analytics />,
        //auth: authRoles.admin,
    },
]

export default defaultRoutes
