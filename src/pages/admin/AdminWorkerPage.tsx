import AdminMainComponent from "../../components/Admin/AdminLayout/AdminMainComponent"
import WorkerTable from "../../components/Admin/Workers/WorkerTable"


const AdminWorkerPage = () => {
  return (
      <AdminMainComponent content={ <WorkerTable/>} />
  )
}

export default AdminWorkerPage
