import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

const EmployeeAttendance = Loadable(lazy(() => import('./employeemanagment/attendance/EmployeeAttendance')))
const UploadAttendance = Loadable(lazy(() => import('./employeemanagment/attendance/UploadAttendance')))
const Tools = Loadable(lazy(() => import('./employeemanagment/attendance/Tool')))
const Update = Loadable(lazy(() => import('./employeemanagment/leave/UpdateLeavePolicy')))
const LeaveType = Loadable(lazy(() => import('./employeemanagment/leave/LeaveType')))
const Appraisal = Loadable(lazy(() => import('./employeemanagment/history/Appraisal')))
const Promotion = Loadable(lazy(() => import('./employeemanagment/history/promotion')))
const Transfer = Loadable(lazy(() => import('./employeemanagment/history/Transfer')))
const Termination = Loadable(lazy(() => import('./employeemanagment/history/Termination')))
const SaleItem = Loadable(lazy(() => import('./inventory/SalesItem')))
const MaterialRequest = Loadable(lazy(() => import('./inventory/transaction/MaterialRequest')))
const ItemTransfer = Loadable(lazy(() => import('./inventory/transaction/ItemTransfer')))
const PurchaseOrder = Loadable(lazy(() => import('./inventory/transaction/PO')))
const Inspection = Loadable(lazy(() => import('./inventory/tools/Inspection')))
const Adjustment = Loadable(lazy(() => import('./inventory/tools/Adjustment')))
const Search = Loadable(lazy(() => import('./inventory/tools/Search')))
const Vendor = Loadable(lazy(() => import('./logistic/Vendor')))
const Issues = Loadable(lazy(() => import('./logistic/Issues')))
const Service = Loadable(lazy(() => import('./logistic/ServiceManagent')))
const FuelEntry = Loadable(lazy(() => import('./logistic/FuelEntry')))
const VihicleHistory = Loadable(lazy(() => import('./logistic/Vechicle')))
const EmployeeTransportation = Loadable(lazy(() => import('./logistic/tripManagment/Employee')))
const ItemTransportation = Loadable(lazy(() => import('./logistic/tripManagment/Item')))

const MRouter = [
    {
        path: '/attendance/employee-attendance/add',
        element: <EmployeeAttendance />,
    },
    {
        path: '/attendance/upload-attendance',
        element: <UploadAttendance />,
    },
    {
        path: '/attendance/attendance-tool',
        element: <Tools />,
    },
    {
        path: '/leave/leave-policy',
        element: <Update />,
    },
    {
        path: '/leave/leave-type',
        element: <LeaveType />,
    },
    {
        path: '/history/appraisal',
        element: <Appraisal />,
    },
    {
        path: '/history/promotion',
        element: <Promotion />,
    }, {
        path: '/history/transfer',
        element: <Transfer />,
    }, {
        path: '/history/termination',
        element: <Termination />,
    },
    {
        path: '/IM/sales',
        element: <SaleItem />,
    },
     {
        path: '/IM/transaction/material-request',
        element: <MaterialRequest />,
    },
     {
        path: '/IM/transaction/item-transfer',
        element: <ItemTransfer />,
    },
    {
        path: '/IM/transaction/po',
        element: <PurchaseOrder />,
    },
    {
        path: '/IM/tool/inspection',
        element: <Inspection />,
    }, {
        path: '/IM/tool/adjustment',
        element: <Adjustment />,
    },
    {
        path: '/IM/tool/search',
        element: <Search />,
    }, {
        path: '/logistic/vendor',
        element: <Vendor />,
    }, {
        path: '/logistic/issues',
        element: <Issues />,
    }, {
        path: '/logistic/serive-maintainance',
        element: <Service />,
    }, {
        path: '/logistic/fuel-entry',
        element: <FuelEntry />,
    },
    {
        path: '/logistic/vehicle-history',
        element: <VihicleHistory />,
    },
    {
        path: '/logistic/trips/employee',
        element: <EmployeeTransportation />,
    },
    {
        path: '/logistic/trips/item',
        element: <ItemTransportation />,
    },
]

export default MRouter