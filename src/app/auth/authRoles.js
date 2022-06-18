export const authRoles = {
    superAdmin: ['superAdmin'], // Only Super Admin has access
    admin: ['superAdmin', 'admin'], // Only SA & Admin has access
    user: ['superAdmin', 'admin', 'user'], // Only SA & Admin & User has access
}