// src/data/menuConfig.js
export const menuByRole = {
    admin: [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/users', label: 'Manage Users' },
        { path: '/settings', label: 'Settings' },
    ],
    user: [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/profile', label: 'My Profile' },
    ],
    guest: [
        { path: '/', label: 'Home' },
        { path: '/login', label: 'Login' },
    ],
};