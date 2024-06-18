import React from 'react'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { Navigate, Outlet } from 'react-router-dom'

const WorkerPrivateRouter:React.FC = () => {
    const { worker } = useAppSelector((state) => state.workerSlice)
  return (
   worker ? <Outlet /> : <Navigate to={'/worker/login'} />
  )
}

export default WorkerPrivateRouter
