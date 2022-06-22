import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

const Profile = Loadable(lazy(() => import('../profile/Profile')))
const CompanySetting = Loadable(lazy(() => import('../profile/CompanySetting')))
const UserSetting = Loadable(lazy(() => import('../profile/UserSetting')))

const dashboardRoutes = [
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/profile/setting',
        element: <UserSetting />
    },
    {
        path: '/company/setting',
        element: <CompanySetting />
    }
]

export default dashboardRoutes
