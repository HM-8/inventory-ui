export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'General',
        icon: 'badge',
        children: [
            {
                name: 'Product',
                path: '/general/products',
            },
            {
                name: 'Branch',
                path: '/general/branch',
            },
            {
                name: 'Settings',
                path: '/general/settings',
            },
        ],
    },
    {
        name: 'Item',
        icon: 'check_circle',
        children: [
            {
                name: 'GRV',
                path: '/item/GRV',
            },
            {
                name: 'Item Variant',
                path: '/item/variant',
            },
            {
                name: 'Unit of Measurement (UOM)',
                path: '/item/uom',
            },
            {
                name: 'Supplier',
                path: '/item/supplier',
            },
            {
                name: 'Item Category',
                path: '/item/category',
            },
            {
                name: 'Item Sale',
                path: '/item/sales-item',
            },
        ],
    },
    {
        name: 'Transaction',
        icon: 'exit_to_app',
        children: [
            {
                name: 'Material request',
                path: '/transaction/material-request',
            },
            {
                name: 'Item transfer ',
                path: '/transaction/transfer',
            },
            {
                name: 'Purchase order',
                path: '/transaction/PO',
            },
            {
                name: 'Freight',
                path: '/transaction/freight',
            },
        ],
    },
    {
        name: 'Tools',
        icon: 'exit_to_app',
        children: [
            {
                name: 'Inventory Reconciliation ',
                path: '/tools/reconciliaiton',
            },
            {
                name: 'Quick Inventory Balance',
                path: '/tools/balance',
            },
            {
                name: 'Adjustment',
                path: '/tools/inspection',
            }
        ],
    },
    {
        name: 'Report',
        icon: 'assessment',
        children: [
            {
                name: 'Monthly Report',
                path: '/report/monthly',
            },
            {
                name: 'Yearly Report',
                path: '/report/yearly',
            },
            {
                name: 'Bin card Report',
                // icon: 'assessment',
                children: [
                    {
                        name: 'Items',
                        path: '/report/bin-item',
                    },
                    {
                        name: 'Service',
                        path: '/report/bin-service',
                    }
                ]
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
    {
        name: 'Profile',
        icon: 'account_circle',

        children: [
            {
                name: 'Profile',
                path: '/profile'
            },
            {
                name: 'Settings',
                path: '/profile/settings',
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
