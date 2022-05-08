export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    // {
    //     label: 'PAGES',
    //     type: 'label',
    // },
    {
        name: 'Employee',
        icon: 'badge',
        children: [
            // {
            //     name: 'Sign in',
            //     iconText: 'SI',
            //     path: '/session/signin',
            // },
            // {
            //     name: 'Sign up',
            //     iconText: 'SU',
            //     path: '/session/signup',
            // },
            // {
            //     name: 'Forgot Password',
            //     iconText: 'FP',
            //     path: '/session/forgot-password',
            // },
            // {
            //     name: 'Error',
            //     iconText: '404',
            //     path: '/session/404',
            // },
            {
                name: 'Add Employee',
                path: '/employee/add-employee',
            },
            {
                name: 'Employment Type',
                path: '/employee/employment-type',
            },
            {
                name: 'Employee Designation',
                path: '/employee/employee-designation',
            },
            {
                name: 'Employee Appraisal',
                path: '/employee/employee-appraisal',
            },
            {
                name: 'Branch',
                path: '/employee/branch',
            },
            {
                name: 'Department',
                path: '/employee/department',
            },
        ],
    },
    {
        name: 'Attendance',
        icon: 'check_circle',
        children: [
            {
                name: 'Employee Attendance',
                path: '/attendance/employee-attendance',
            },
            {
                name: 'Upload Attendance',
                path: '/attendance/upload-attendance',
            },
            {
                name: 'Employee Attendance Tool',
                path: '/attendance/attendance-tool',
            },
            {
                name: 'Attendance Request',
                path: '/attendance/attendance-request',
            },
        ],
    },
    {
        name: 'Leave',
        icon: 'exit_to_app',
        children: [
            {
                name: 'Leave Policy',
                path: '/leave/leave-policy',
            },
            {
                name: 'Leave Type',
                path: '/leave/leave-type',
            },
            {
                name: 'Leave Request',
                path: '/leave/leave-request',
            },
            {
                name: 'Extend Leave Request',
                path: '/leave/extend-leave-request',
            },
        ],
    },
    {
        name: 'Report',
        icon: 'assessment',
        children: [
            {
                name: 'New Employees',
                path: '/report/new-employee-report',
            },
            {
                name: 'Employee Promotion',
                path: '/report/employee-promotion-report',
            },
            {
                name: 'Employee Transfer',
                path: '/report/employee-transfer-report',
            },
            {
                name: 'Employee Appraisal',
                path: '/report/employee-appraisal-report',
            },
            {
                name: 'Employee Termination',
                path: '/report/employee-termination-report',
            },

            {
                name: 'Employee Leave',
                path: '/report/employee-leave-report',
            },
            {
                name: 'Employee Attendance',
                path: '/report/employee-attendance-report',
            },
        ],
    },
    {
        name: 'Default',
        icon: 'lock_reset',
        path: '/set-defaults'
    },
    {
        label: 'General',
        type: 'label',
    },
    
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',

    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    {
        name: 'Profile',
        icon: 'account_circle',

        children: [
            {
                name: 'Settings',
                path: '/profile/settings',
                iconText: 'E',
            },
            {
                name: 'Log Out',
                path: '/profile/logout',
                iconText: 'E',
            },
        ],
    },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    }
]
