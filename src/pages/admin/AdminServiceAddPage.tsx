import React from 'react'
import AdminMainComponent from '../../components/admin/AdminMainComponent'
import AddServiceForm from '../../components/admin/forms/AddServiceForm'

const AdminServiceAddPage:React.FC = () => {
  return (
    <AdminMainComponent content={<AddServiceForm />}/>
  )
}

export default AdminServiceAddPage
