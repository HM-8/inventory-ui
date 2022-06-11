import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Inspection= Loadable(lazy(()=>import('./Adjustments')))
const Reconciliation= Loadable(lazy(()=>import('./InventoryReconciliation')))
const Balance= Loadable(lazy(()=>import('./QuickInventoryBalance')))


const ToolsRoutes = [
    {
        path: '/tools/inspection',
        element: <Inspection />,
    },
    {
        path: '/tools/reconciliaiton',
        element: <Reconciliation />,
    },
    {
        path: '/tools/balance',
        element: <Balance />,
    }
]

export default ToolsRoutes