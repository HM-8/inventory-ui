import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
// import { authRoles } from '../../auth/authRoles'

const Analytics = Loadable(lazy(() => import('./Analytics')))

const dashboardRoutes = [
    {
        path: '/dashboard',
        element: <Analytics />,
        // auth: authRoles.user,
    },
]

export default dashboardRoutes
