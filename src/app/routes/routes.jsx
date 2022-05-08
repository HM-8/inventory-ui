import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

import attendanceRoutes from 'app/views/attendance/AttendanceRoutes'
import employeeRoutes from 'app/views/employee/EmployeeRoutes'
import leaveRoutes from 'app/views/leave/LeaveRoutes'
import reportRoutes from 'app/views/report/ReportRoutes'
import defaultRoutes from 'app/views/default/DefaultRoutes'

export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes, ...attendanceRoutes, ...employeeRoutes, ...leaveRoutes, ...reportRoutes, ...defaultRoutes],
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
