import React from 'react'
import AdminMainComponent from '../../components/admin/AdminMainComponent'
import AdminDashboard from '../../components/admin/AdminDashboard'


const AdminDashboardPage:React.FC = () => {
  return (
    <AdminMainComponent content={<AdminDashboard /> } />
  )
}

export default AdminDashboardPage
