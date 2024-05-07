import AdminMainComponent from "../../components/admin/AdminMainComponent"
import WorkerTable from "../../components/admin/tables/WorkerTable"


const AdminWorkerPage = () => {
  return (
      <AdminMainComponent content={ <WorkerTable/>} />
  )
}

export default AdminWorkerPage
