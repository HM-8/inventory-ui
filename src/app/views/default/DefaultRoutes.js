import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Analytics = Loadable(lazy(() => import('../dashboard/Analytics')))

const defaultRoutes = [
    {
        path: '/set-defaults',
        element: <Analytics />,
    },
]

export default defaultRoutes
