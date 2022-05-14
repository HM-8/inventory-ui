import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const SalesReturn= Loadable(lazy(()=>import('./SalesReturn')))
const PurchaseReturn= Loadable(lazy(()=>import('./PurchaseReturn')))



const ReturnRoutes = [
    {
        path: '/return/sales-return',
        element: <SalesReturn />,
    },
    {
        path: '/return/purchase-return',
        element: <PurchaseReturn />,
    }
]

export default ReturnRoutes