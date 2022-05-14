import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const InventoryEntry= Loadable(lazy(()=>import('./InventoryEntry')))
const ItemTransfer= Loadable(lazy(()=>import('./ItemTransfer')))
const MaterialRequest= Loadable(lazy(()=>import('./ItemTransfer')))
const PurchaseRequest= Loadable(lazy(()=>import('./ItemTransfer')))
const ProcessingRecipet= Loadable(lazy(()=>import('./ItemTransfer')))
const PO= Loadable(lazy(()=>import('./ItemTransfer')))
const SO= Loadable(lazy(()=>import('./ItemTransfer')))
const Transaction= Loadable(lazy(()=>import('./ItemTransfer')))

const TransactionRoutes = [
    {
        path: '/transaction/inventory-entry',
        element: <InventoryEntry />,
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
        path: '/transaction/purchase-request',
        element: <PurchaseRequest />,
    },
    {
        path: '/transaction/request',
        element: <ProcessingRecipet />,
    },
    {
        path: '/transaction/PO',
        element: <PO />,
    },
    {
        path: '/transaction/SO',
        element: <SO />,
    },
    {
        path: '/transaction/transaction',
        element: <Transaction />,
    }
]

export default TransactionRoutes