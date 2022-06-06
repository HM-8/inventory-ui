import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Monthly = Loadable(lazy(() => import('./inventory/Monthly')))
const Yearly = Loadable(lazy(() => import('./inventory/Yearly')))
const BinItem = Loadable(lazy(() => import('./inventory/BinItemReport')))
const BinService = Loadable(lazy(() => import('./inventory/BinServiceReport')))
const SivReport = Loadable(lazy(() => import('./inventory/SivReport')))
const GrvReport = Loadable(lazy(() => import('./inventory/grv/GrvReport')))
const POReport = Loadable(lazy(() => import('./inventory/PoReport')))

const NewEmployees = Loadable(lazy(() => import('./hr/NewEmployee.jsx')))
const Promotion = Loadable(lazy(() => import('./hr/EmployeePromotion.jsx')))
const Transfer = Loadable(lazy(() => import('./hr/Transfer')))
const Appraisal = Loadable(lazy(() => import('./hr/Appraisal')))
const Termination = Loadable(lazy(() => import('./hr/Termination')))
const Leave = Loadable(lazy(() => import('./hr/Leave')))
const Attendance = Loadable(lazy(() => import('./hr/Attendance')))
const TravelRequests = Loadable(lazy(() => import('./hr/TravelRequest.jsx')))


const EmployeeTransportation = Loadable(lazy(() => import('./transport/TravelRequest')))
const ItemTransportation = Loadable(lazy(() => import('./transport/ItemTransport')))
const Expiry = Loadable(lazy(() => import('./transport/ExpiryReinders')))
const KmService = Loadable(lazy(() => import('./transport/reminders/KilometerServiceReminder ')))
const RenewalReminder = Loadable(lazy(() => import('./transport/reminders/RenewalReminder')))

const ReportRoutes = [
    {
        path: '/report/inventory/monthly',
        element: <Monthly />,
    },
    {
        path: '/report/inventory/yearly',
        element: <Yearly />,
    },
    {
        path: '/report/inventory/bincard',
        element: <BinItem />,
    },
    {
        path: '/report/bincard',
        element: <BinService />,
    },
    {
        path: '/report/inventory/siv',
        element: <SivReport />,
    },
    {
        path: '/report/inventory/grv',
        element: <GrvReport />,
    },
    {
        path: '/report/inventory/po',
        element: <POReport />,
    },
    
     {
        path: '/report/hr/new-empolyees',
        element: <NewEmployees />,
    }, 
    {
        path: '/report/hr/promotion',
        element: <Promotion />,
    },
     {
        path: '/report/hr/transfers',
        element: <Transfer />,
    }, 
    {
        path: '/report/hr/appraisal',
        element: <Appraisal />,
    },
    {
        path: '/report/hr/termination',
        element: <Termination />,
    },
    {
        path: '/report/hr/leave',
        element: <Leave />,
    },
    {
        path: '/report/hr/attendance',
        element: <Attendance />,
    },
    {
        path: '/report/hr/travelRequest',
        element: <TravelRequests />,
    },

    {
        path: '/report/transport/employee-transport',
        element: <EmployeeTransportation />,
    }, 
    {
        path: '/report/inventory/item-transfer',
        element: <ItemTransportation />,
    },
    {
        path: '/report/inventory/expiry',
        element: <Expiry />,
    }, 
    {
        path: '/report/transport/reminders/kmservice',
        element: <KmService />,
    },{
        path: '/report/inventory/reminders/renewal',
        element: <RenewalReminder />,
    }, 
]

export default ReportRoutes