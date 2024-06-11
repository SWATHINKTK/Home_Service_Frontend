import React from 'react';
import { Helmet } from 'react-helmet-async';

import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import ServiceTable from '../../components/Admin/Services/ServiceTable'

const AdminServiceViewPage:React.FC = () => {
  return (
    <>
    <Helmet>
        <title>Services</title>
      </Helmet>
      <AdminMainComponent content={<ServiceTable/>} />
    </>
  )
}

export default AdminServiceViewPage
