import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useTypedSelector';


const PrivateRouter = () => {
    const { user } = useAppSelector((state) => state.user);
    console.log(user)
  return (
    user ? <Outlet /> : <Navigate to={'/login'} replace></Navigate>
  )
}

export default PrivateRouter
