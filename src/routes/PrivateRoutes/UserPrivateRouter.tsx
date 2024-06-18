import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useTypedSelector';


const UserPrivateRouter = () => {
    const { user } = useAppSelector((state) => state.user);
  return (
    user ? <Outlet /> : <Navigate to={'/login'} replace></Navigate>
  )
}

export default UserPrivateRouter;
