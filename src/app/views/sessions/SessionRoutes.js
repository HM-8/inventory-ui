import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));
const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
const JwtLogout = Loadable(lazy(() => import("./logout/JwtLogout")));

//const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

const sessionRoutes = [
    // {
    //     path: '/session/signup',
    //     element: <JwtRegister />,
    // },
    {
        path: '/session/login',
        element: <JwtLogin />,
    },
    {
        path: '/session/logout',
        element: <JwtLogout/>
    },
    {
        path: '/session/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/session/404',
        element: <NotFound />,
    },
]

export default sessionRoutes
