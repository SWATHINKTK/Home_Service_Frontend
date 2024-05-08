import React from 'react'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import AdminDashboard from '../../components/Admin/Dashboard/AdminDashboard'


const AdminDashboardPage:React.FC = () => {
  return (
    <AdminMainComponent content={<AdminDashboard /> } />
  )
}

export default AdminDashboardPage
