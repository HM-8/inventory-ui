import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Freight= Loadable(lazy(()=>import('./Freight')))
const ItemTransfer= Loadable(lazy(()=>import('./ItemTransfer')))
const MaterialRequest= Loadable(lazy(()=>import('./MaterialRequest')))
const PO= Loadable(lazy(()=>import('./PurchaseOrder')))
const SIV= Loadable(lazy(()=>import('./SIV')))

const TransactionRoutes = [
    {
        path: '/transaction/freight',
        element: <Freight />,
    },
    {
        path: '/transaction/SIV',
        element: <SIV />,
    },
    {
        path: '/transaction/transfer',
        element: <ItemTransfer />,
    },
    {
        path: '/transaction/material-request',
        element: <MaterialRequest />,
    },
    {
        path: '/transaction/PO',
        element: <PO />,
    }
]

export default TransactionRoutes