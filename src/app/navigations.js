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
                name: 'Item details',
                path: '/item/details',
            },
            {
                name: 'Sale Item',
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
                path: '/transaction/inventory-item',
            },
            {
                name: 'Purchase order',
                path: '/transaction/PO',
            },
            {
                name: 'Sale order',
                path: '/transaction/SO',
            },
            {
                name: 'Processing receipts',
                path: '/transaction/request',
            },
            {
                name: 'Inventory entry ',
                path: '/leave/extend-leave-request',
            },
        ],
    },
    {
        name: 'Tools',
        icon: 'exit_to_app',
        children: [
            {
                name: 'Quality Inspection',
                path: '/transaction/inventory-entry',
            },
            {
                name: '/tools/reconciliaiton',
                path: '/leave/leave-type',
            },
            {
                name: 'Quick Inventory Balance',
                path: '/tools/balance',
            },
        ],
    },
    {
        name: 'Return',
        icon: 'exit_to_app',
        children: [
            {
                name: 'Sales Return ',
                path: '/return/sales-return',
            },
            {
                name: 'Purchase Return ',
                path: '/return/purchase-return',
            }
        ],
    },
    {
        name: 'Report',
        icon: 'assessment',
        children: [
            {
                name: 'Ledger ',
                path: '/report/ledger',
            },
            {
                name: 'Stock Level Report',
                path: '/transaction/purchase-request',
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
