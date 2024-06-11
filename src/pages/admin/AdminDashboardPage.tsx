import React from 'react';
import { Helmet } from 'react-helmet-async';

import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import AdminDashboard from '../../components/Admin/Dashboard/AdminDashboard'


const AdminDashboardPage:React.FC = () => {
  return (
    <>
    <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <AdminMainComponent content={<AdminDashboard /> } />
    </>
  )
}

export default AdminDashboardPage
