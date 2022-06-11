import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const HR= Loadable(lazy(()=>import('./HR')))
const Inventory= Loadable(lazy(()=>import('./Inventory')))
const Transport= Loadable(lazy(()=>import('./Transport')))

const SettingsRoutes = [
    {
        path: '/settings/hr',
        element: <HR />,
    },
    {
        path: '/settings/inventory',
        element: <Inventory />,
    },
    {
        path: '/settings/tranport',
        element: <Transport />,
    },
    
]

export default SettingsRoutes