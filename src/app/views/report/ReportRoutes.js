import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Monthly= Loadable(lazy(()=>import('./Monthly')))
const Yearly= Loadable(lazy(()=>import('./Yearly')))
const BinItem= Loadable(lazy(()=>import('./BinItemReport')))
const BinService= Loadable(lazy(()=>import('./BinServiceReport')))


const ReportRoutes = [
    {
        path: '/report/monthly',
        element: <Monthly />,
    },
    {
        path: '/report/yearly',
        element: <Yearly />,
    },
    {
        path: '/report/bin-item',
        element: <BinItem />,
    },
    {
        path: '/report/bin-service',
        element: <BinService />,
    }
]

export default ReportRoutes