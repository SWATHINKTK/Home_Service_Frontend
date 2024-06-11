import { Helmet } from 'react-helmet-async';

import AdminMainComponent from "../../components/Admin/AdminLayout/AdminMainComponent"
import WorkerTable from "../../components/Admin/Workers/WorkerTable"


const AdminWorkerPage = () => {
  return (
      <>
      <Helmet>
        <title>Workers</title>
      </Helmet>
      <AdminMainComponent content={ <WorkerTable/>} />
      </>
  )
}

export default AdminWorkerPage
