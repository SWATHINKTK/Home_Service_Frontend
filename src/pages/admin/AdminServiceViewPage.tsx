import React from 'react'
import AdminMainComponent from '../../components/admin/AdminMainComponent'
import ServiceTable from '../../components/admin/tables/ServiceTable'

const AdminServiceViewPage:React.FC = () => {
  return (
    <AdminMainComponent content={<ServiceTable/>} />
  )
}

export default AdminServiceViewPage
