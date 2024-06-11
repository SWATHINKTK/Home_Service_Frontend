import { Helmet } from 'react-helmet-async';

import AdminMainComponent from "../../components/Admin/AdminLayout/AdminMainComponent"
import UserTable from "../../components/Admin/Users/UserTable"

const AdminUserPage = () => {
  return (
      <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <AdminMainComponent content={ <UserTable/>} />
      </>
  )
}

export default AdminUserPage
