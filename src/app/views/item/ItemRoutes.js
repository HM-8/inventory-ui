import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const ItemDetails= Loadable(lazy(()=>import('./ItemDetails')))
const SaleItem= Loadable(lazy(()=>import('./SaleItem')))

const ItemRoutes = [
    {
        path: '/item/details',
        element: <ItemDetails />,
    },
    {
        path: '/item/sales-item',
        element: <SaleItem />,
    }
]

export default ItemRoutes