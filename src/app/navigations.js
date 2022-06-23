import { authRoles } from './auth/authRoles'
const role = window.localStorage.getItem('userRole')

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        label: 'General',
        type: 'label',
    },
    {
        name: 'General',
        icon: 'grade',
        children: [
            {
                name: 'Company',
                path: '/general/company',
            },
            {
                name: 'Settings',
                path: '/company/setting',
            },
            {
                name: 'Account',
                path: '/general/account',
            },
        ],
    },
    {
        label: 'Setup',
        type: 'label',
    },
    {
        name: 'Registration',
        icon: 'work',
        auth: authRoles.admin,
        children: [
            {
                name: 'Human Resource',
                icon: 'supervisor_account',
                children: [
                    {
                        name: 'Employee Creation',
                        path: '/hr/empCreation',
                    },
                    {
                        name: 'Branch',
                        path: '/hr/branch',
                    },
                    {
                        name: 'Department',
                        path: '/hr/department',
                    },
                    {
                        name: 'Designation',
                        path: '/hr/designation',
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
                                name: 'Item List',
                                path: '/inventory/item/itemlist',
                            },
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
                        path: '/transport/registration',
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
        label: 'Management',
        type: 'label',
    },

    {
        name: 'Employee Management',
        icon: 'supervisor_account',
        children: [
            {
                name: 'Employee List',
                path: '/managment/employees',
                icon: 'assignment_turned_in',
            },
            {
                name: 'Attendance',
                icon: 'assignment_turned_in',
                children: [
                    {
                        name: 'Employee Attendance',
                        path: '/attendance/employee-attendance/add',
                    },
                ],
            },
            {
                name: 'Employee History',
                icon: 'assignment_ind',
                children: [
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
                        name: 'Employee Termination',
                        path: '/report/hr/termination',
                    },
                    {
                        name: 'Employee Leave',
                        path: '/report/hr/leave',
                    },
                    {
                        name: 'Employee Attendance',
                        path: '/report/hr/attendance',
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
                ],
            },
        ],
    },
    {
        label: 'Profile',
        type: 'label',
    },
    {
        name: 'My Profile',
        icon: 'account_circle',
        children: [
            {
                name: 'Profile',
                icon: 'exit_to_app',
                path: '/profile'
            },
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
                        name: 'Attendance Request',
                        path: 'profile/attendance-request',
                    },
                ],
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
    }
]