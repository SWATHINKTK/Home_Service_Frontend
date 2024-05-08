import AdminMainComponent from "../../components/Admin/AdminLayout/AdminMainComponent"
import UserTable from "../../components/Admin/Users/UserTable"

const AdminUserPage = () => {
  return (
      <AdminMainComponent content={ <UserTable/>} />
  )
}

export default AdminUserPage
