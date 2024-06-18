import React from 'react'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRouter:React.FC = () => {
    const { admin } = useAppSelector((state) => state.adminAuthSlice);
    return (
        admin ? <Outlet /> : <Navigate to={'/admin/login'} replace />
    )
}

export default AdminPrivateRouter;
