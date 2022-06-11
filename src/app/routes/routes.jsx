import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

import employeeRoutes from 'app/views/employee/EmployeeRoutes'
import reportRoutes from 'app/views/report/ReportRoutes'
import defaultRoutes from 'app/views/default/DefaultRoutes'
import profileRoutes from 'app/views/profile/ProfileRoutes'
import RegisterRoutes from 'app/views/register/RegisterRoutes'
import ItemRoutes from 'app/views/item/ItemRoutes'
import ToolsRoute from 'app/views/tools/ToolsRoutes'
import TransactionRoute from 'app/views/transaction/TransactionRoutes'
import ReturnReport from "app/views/return/ReturnRoutes"
import PersonalRouter from 'app/views/personalPage/personalRouter'
import MRouter from 'app/views/managment/MRouter'
import SettingsRouter from 'app/views/settings/SettingsRouter'

export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes,...ReturnReport,...TransactionRoute,...RegisterRoutes, ...employeeRoutes, ...reportRoutes, ...defaultRoutes, ...ItemRoutes, ...ToolsRoute,...profileRoutes,...PersonalRouter, ...MRouter,...SettingsRouter],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="dashboard" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
