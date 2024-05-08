import React from 'react'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import AddServiceForm from '../../components/Admin/Services/AddServiceForm'

const AdminServiceAddPage:React.FC = () => {
  return (
    <AdminMainComponent content={<AddServiceForm />}/>
  )
}

export default AdminServiceAddPage
