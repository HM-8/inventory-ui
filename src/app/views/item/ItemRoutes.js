import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const GRV= Loadable(lazy(()=>import('./GRV/GRV')))
const Variant= Loadable(lazy(()=>import('./variant/ItemVariant')))
const UOM= Loadable(lazy(()=>import('./UOM/UOM')))
const Supplier= Loadable(lazy(()=>import('./supplier/Supplier')))
const Category= Loadable(lazy(()=>import('./catergory/ItemCategory')))
const SaleItem= Loadable(lazy(()=>import('./SaleItem')))
const NewVariant= Loadable(lazy(()=>import('./variant/AddVariatn')))
const NewUOM=Loadable(lazy(()=>import('./UOM/NewUOM')))
const Newsupplier=Loadable(lazy(()=>import('./supplier/NewSupplier')))
const NewCategory=Loadable(lazy(()=>import('./catergory/NewCategory')))

const ItemRoutes = [
    {
        path: '/item/GRV',
        element: <GRV />,
    },
    {
        path: '/item/variant',
        element: <Variant />,
    },
    {
        path: '/item/new-variant',
        element: <NewVariant />,
    },
    {
        path: '/item/uom',
        element: <UOM />,
    },
    {
        path: '/item/New-uom',
        element: <NewUOM />,
    },
    {
        path: '/item/supplier',
        element: <Supplier />,
    },
    {
        path: '/item/Newsupplier',
        element: <Newsupplier />,
    },
    {
        path: '/item/category',
        element: <Category />,
    },
    {
        path: '/item/Newcategory',
        element: <NewCategory />,
    },
    {
        path: '/item/sales-item',
        element: <SaleItem />,
    },
]

export default ItemRoutes