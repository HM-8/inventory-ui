import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

const Profile = Loadable(lazy(() => import('../profile/Profile')))
const ProfileSettings = Loadable(lazy(() => import('../profile/ProfileSettings')))

const dashboardRoutes = [
    {
        path: '/profile/settings',
        element: <ProfileSettings />,
        //auth: authRoles.admin,
    },
    {
        path: '/profile',
        element: <Profile />
    }
]

export default dashboardRoutes
