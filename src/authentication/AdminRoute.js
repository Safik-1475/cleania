import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Admin from '../hooks/Admin';

const AdminRoute = () => {
    const [admin] = Admin();
    if (!admin) {
        return <Navigate to='/' replace />
    }
    return <Outlet />
};

export default AdminRoute;