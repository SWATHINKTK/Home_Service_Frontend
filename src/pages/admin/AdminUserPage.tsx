import AdminMainComponent from "../../components/admin/AdminMainComponent"
import UserTable from "../../components/admin/tables/UserTable"

const AdminUserPage = () => {
  return (
      <AdminMainComponent content={ <UserTable/>} />
  )
}

export default AdminUserPage
