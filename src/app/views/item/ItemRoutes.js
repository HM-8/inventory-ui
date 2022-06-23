import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const GRV= Loadable(lazy(()=>import('./GRV/GRV')))
const Variant= Loadable(lazy(()=>import('./variant/ItemVariant')))
const UOM= Loadable(lazy(()=>import('./UOM/UOM')))
const Supplier= Loadable(lazy(()=>import('./supplier/Supplier')))
const Category= Loadable(lazy(()=>import('./catergory/ItemCategory')))
const NewVariant= Loadable(lazy(()=>import('./variant/AddVariatn')))
const NewUOM=Loadable(lazy(()=>import('./UOM/NewUOM')))
const Newsupplier=Loadable(lazy(()=>import('./supplier/NewSupplier')))
const NewCategory=Loadable(lazy(()=>import('./catergory/NewCategory')))
const Itemlist=Loadable(lazy(()=>import('./Itemlist/Itemlist')))
const NewItemlist=Loadable(lazy(()=>import('./Itemlist/NewItem')))

const ItemRoutes = [
    {
        path: '/inventory/item/grv',
        element: <GRV />,
    },
    {
        path: 'inventory/item/variant',
        element: <Variant />,
    },
    {
        path: '/item/new-variant',
        element: <NewVariant />,
    },
    {
        path: '/inventory/item/uom',
        element: <UOM />,
    },
    {
        path: '/item/New-uom',
        element: <NewUOM />,
    },
    {
        path: '/inventory/item/supplier',
        element: <Supplier />,
    },
    {
        path: '/item/Newsupplier',
        element: <Newsupplier />,
    },
    {
        path: '/inventory/item/category',
        element: <Category />,
    },
    {
        path: '/item/Newcategory',
        element: <NewCategory />,
    },
    {
        path: '/inventory/item/itemlist',
        element: <Itemlist />,
    },
    {
        path: '/inventory/item/newitem',
        element: <NewItemlist />,
    },
]

export default ItemRoutes