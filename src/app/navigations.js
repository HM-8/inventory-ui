import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        label: 'Company Setup',
        type: 'label',
    },
    {
        name: 'Registration',
        icon: 'work',
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
                name: 'General',
                icon: 'grade',
                children: [
                    {
                        name: 'Company',
                        path: '/general/company',
                    },
                    {
                        name: 'Branch',
                        path: '/general/branch',
                    },
                    {
                        name: 'Department',
                        path: '/general/department',
                    },
                ],
            },
            {
                name: 'Human Resource',
                icon: 'supervisor_account',
                children: [
                    {
                        name: 'Employee Creation',
                        path: '/hr/empCreation',
                    },
                    {
                        name: 'Salery Details',
                        path: '/hr/salaryDetails',
                    },
                ],
            },
            {
                name: 'Inventory',
                icon: 'shopping_cart',
                children: [
                    {
                        name: 'Product',
                        path: '/inventory/product',
                    },
                    {
                        name: 'Item',
                        icon: 'exit_to_app',
                        children: [
                            {
                                name: 'GRV',
                                path: '/inventory/item/grv',
                            },
                            {
                                name: 'Variant',
                                path: '/inventory/item/variant',
                            },
                            {
                                name: 'UOM',
                                path: '/inventory/item/uom',
                            },
                            {
                                name: 'Supplier',
                                path: '/inventory/item/supplier',
                            },
                            {
                                name: 'Category & Subcategory',
                                path: '/inventory/item/category',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Transport',
                icon: 'airport_shuttle',
                children: [
                    {
                        name: 'Vehicle Registration',
                        path: '/transport/regsitration',
                    },
                    {
                        name: 'Vechicle Assignment',
                        path: '/transport/assignment',
                    },
                ],
            },
        ],
    },

    {
        label: 'Personal Pages',
        type: 'label',
    },

    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'My Profile',
        icon: 'account_circle',
        children: [
            {
                name: 'My Request',
                icon: 'exit_to_app',
                children: [
                    {
                        name: 'Travel Request',
                        path: '/profile/travel-request',
                    },
                    {
                        name: 'Leave Request',
                        path: '/profile/leave-request',
                    },
                    {
                        name: 'Extend Leave Request',
                        path: 'profile/extended-leave',
                    },
                    {
                        name: 'Attendance Request',
                        path: 'profile/attendance-request',
                    },
                ],
            },
            {
                name: 'My Status',
                path: '/profile/my-status',
            },
            {
                name: 'My Salary',
                path: '/profile/my-salary',
                iconText: 'E',
            },
            {
                name: 'Log Out',
                path: '/session/logout',
                iconText: 'E',
            },
            {
                name: 'Log In',
                path: '/session/login',
                iconText: 'E',
            },
        ],
    },

    {
        label: 'Management',
        type: 'label',
    },

    {
        name: 'Employee Management',
        icon: 'supervisor_account',
        children: [
            {
                name: 'Attendance',
                icon: 'assignment_turned_in',
                children: [
                    {
                        name: 'Employee Attendance',
                        path: '/attendance/employee-attendance/add',
                    },
                    {
                        name: 'Upload Attendance',
                        path: '/attendance/upload-attendance',
                    },
                    {
                        name: 'Employee Attendance Tool',
                        path: '/attendance/attendance-tool',
                    },
                ],
            },
            {
                name: 'Leave',
                icon: 'assignment_return',
                children: [
                    {
                        name: 'Update Leave Policy',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Leave Type',
                        path: '/leave/leave-type',
                    },
                ],
            },
            {
                name: 'Employee History',
                icon: 'assignment_ind',
                children: [
                    {
                        name: 'Employee Appraisal',
                        path: '/history/appraisal',
                    },
                    {
                        name: 'Employee Promotion',
                        path: '/history/promotion',
                    },
                    {
                        name: 'Employee Transfer',
                        path: '/history/transfer',
                    },
                    {
                        name: 'Employee Termination',
                        path: '/history/termination',
                    },
                ],
            },
        ],
    },
    {
        name: 'Inventory Management',
        icon: 'shopping_cart',
        children: [
            {
                name: 'Sale Item',
                path: '/IM/sales',
            },
            {
                name: 'Transaction',
                icon: 'next_week',
                children: [
                    {
                        name: 'Material Request',
                        path: '/IM/transaction/material-request',
                    },
                    {
                        name: 'Item Transfer',
                        path: '/IM/transaction/item-transfer',
                    },
                    {
                        name: 'Purchase Order',
                        path: '/IM/transaction/po',
                    },
                ],
            },
            {
                name: 'Tool',
                icon: 'build',
                children: [
                    {
                        name: 'Inspection',
                        path: '/IM/tool/inspection',
                    },
                    {
                        name: 'Adjustment',
                        path: '/IM/tool/adjustment',
                    },
                    {
                        name: 'Search',
                        path: '/IM/tool/search',
                    },
                ],
            },
        ],
    },

    {
        name: 'Logistics Management',
        icon: 'assessment',
        children: [
            {
                name: 'Vendor',
                path: '/logistic/vendor',
            },
            {
                name: 'Issues',
                path: '/logistic/issues',
            },
            {
                name: 'Record Maintenance Details',
                path: '/logistic/serive-maintainance',
            },
            {
                name: 'Fuel Entry',
                path: '/logistic/fuel-entry',
            },
             {
                name: 'Vehicle History',
                path: '/logistic/vehicle-history',
            },
            {
                name: 'Managing Trips',
                icon: 'airport_shuttle',
                children: [
                    {
                        name: 'Employee Transportation',
                        path: '/logistic/trips/employee',
                    },
                    {
                        name: 'Item Transportation',
                        path: '/logistic/trips/item',
                    },
                ],
            }, 
        ],
    },

    {
        label: 'Report',
        type: 'label',
    },

    {
        name: 'Report',
        icon: 'equalizer',
        children: [
            {
                name: 'Human Resource',
                icon: 'assessment',
                children: [
                    {
                        name: 'New Employees',
                        path: '/report/hr/new-empolyees',
                    },
                    {
                        name: 'Employee Promotion',
                        path: '/report/hr/promotion',
                    },
                    {
                        name: 'Employee Transfer',
                        path: '/report/hr/transfers',
                    },
                    {
                        name: 'Employee Appraisal',
                        path: '/report/hr/appraisal',
                    },
                    {
                        name: 'Employee Termination',
                        path: '/report/hr/termination',
                    },{
                        name: 'Employee Leave',
                        path: '/report/hr/leave',
                    },
                    {
                        name: 'Employee Attendance',
                        path: '/report/hr/attendance',
                    },
                    {
                        name: 'Travel Requests',
                        path: '/report/hr/travelRequest',
                    },
                ],
            },
            {
                name: 'Inventory',
                icon: 'shopping_cart',
                children: [
                    {
                        name: 'Monthly',
                        path: '/report/inventory/monthly',
                    },
                    {
                        name: 'Yearly',
                        path: '/report/inventory/yearly',
                    },
                    {
                        name: 'Bin Card',
                        path: '/report/inventory/bincard',
                    },
                    {
                        name: 'GRV',
                        path: '/report/inventory/grv',
                    },
                    {
                        name: 'SIV',
                        path: '/report/inventory/siv',
                    },
                    {
                        name: 'Purchase Order',
                        path: '/report/inventory/po',
                    },
                ],
            },
            {
                name: 'Transport',
                icon: 'local_shipping',
                children: [
                    {
                        name: 'Travel Request',
                        path: '/report/transport/employee-transport',
                    },
                    {
                        name: 'Item Transfer',
                        path: '/report/inventory/item-transfer',
                    },
                    {
                        name: 'Expiry Reinders ',
                        path: '/report/inventory/expiry',
                    },
                    {
                        name: 'Reminders',
                        children: [
                            {
                                name: 'Kilometer Service Reminder ',
                                path: '/report/transport/reminders/kmservice',
                            },
                            {
                                name: 'Renewal Reminder ',
                                path: '/report/inventory/reminders/renewal',
                            },
                        ],
                    },
                ],
            },
            
        ],
    },

    {
        label: 'Defaults',
        type: 'label',
    },

    {
        name: 'Settings',
        icon: 'settings',
        children: [
            {
                name: 'Human Resource',
                path: '/settings/hr',
            },
            {
                name: 'Inventory',
                path: '/settings/inventory',
            },
            {
                name: 'Transport',
                path: '/settings/tranport',
            },
        ],
    },
    
    {
        label: 'General',
        type: 'label',
    },
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
    },
]