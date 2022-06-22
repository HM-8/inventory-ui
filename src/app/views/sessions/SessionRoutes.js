import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));
const ResetPassword = Loadable(lazy(() => import("./ResetPassword")));
const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
const JwtLogout = Loadable(lazy(() => import("./logout/JwtLogout")));
const Landing = Loadable(lazy(() => import("./LandingPage")));

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
        path: '/session/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/session/404',
        element: <NotFound />,
    },
    {
        path: '/landing',
        element: <Landing />,
    },
]

export default sessionRoutes
