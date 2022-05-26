import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

// const AddEmployee = Loadable(lazy(() => import('./AddEmployee')))
const TravelRequest= Loadable(lazy(()=>import('./myprofile/requests/Travel')))
const LeaveRequest= Loadable(lazy(()=>import('./myprofile/requests/Leave')))
const ExtendedLeave= Loadable(lazy(()=>import('./myprofile/requests/Extended')))
const AttendanceRequest= Loadable(lazy(()=>import('./myprofile/requests/Attendance')))
const Status= Loadable(lazy(()=>import('./myprofile/Status')))
const Salary= Loadable(lazy(()=>import('./myprofile/Salary')))

const PersonalRouter = [
    {
        path: '/profile/travel-request',
        element: <TravelRequest />,
    },
    {
        path: '/profile/leave-request',
        element: <LeaveRequest />,
    },
    {
        path: 'profile/extended-leave',
        element: <ExtendedLeave />,
    },
    {
        path: 'profile/attendance-request',
        element: <AttendanceRequest />,
    },
    {
        path: '/profile/my-status',
        element: <Status />,
    },
    {
        path: '/profile/my-salary',
        element: <Salary />,
    },
]

export default PersonalRouter