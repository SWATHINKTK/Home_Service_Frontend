import React from 'react'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import ServiceTable from '../../components/Admin/Services/ServiceTable'

const AdminServiceViewPage:React.FC = () => {
  return (
    <AdminMainComponent content={<ServiceTable/>} />
  )
}

export default AdminServiceViewPage
