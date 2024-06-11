import React from 'react';
import { Helmet } from 'react-helmet-async';

import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import AddServiceForm from '../../components/Admin/Services/AddServiceForm'

const AdminServiceAddPage:React.FC = () => {
  return (
    <><Helmet>
    <title>Add Service</title>
  </Helmet>
    <AdminMainComponent content={<AddServiceForm />}/>
    </>
  )
}

export default AdminServiceAddPage
