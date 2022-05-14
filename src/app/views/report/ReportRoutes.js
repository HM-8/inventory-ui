import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Ledger= Loadable(lazy(()=>import('./Ledger')))
const StockLevelReport= Loadable(lazy(()=>import('./StockLevelReport')))


const ReportRoutes = [
    {
        path: '/report/ledger',
        element: <Ledger />,
    },
    {
        path: '/transaction/purchase-request',
        element: <StockLevelReport />,
    }
]

export default ReportRoutes