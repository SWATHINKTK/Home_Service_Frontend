import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useTypedSelector';

const Error404:React.FC = () => {
    const { user } = useAppSelector((state) => state.user);
  return (
    <div className='flex justify-center items-center h-[100vh] p-3 font-Montserrat'>
      <div>
      <img className='h-[60vh]' src="/image/404.png" alt="" />
      <h2 className='text-center text-3xl font-bold mt-5'>I Have Bad News For You</h2>
      <p className='text-center font-semibold'>404 PAGE IS NOT FOUND</p>
      <Link to={user ? '/' : '/worker'} >
      <p className='font-semibold text-[#152965] my-5 flex justify-center items-center'>Go to HomePage <FaArrowRightLong className='mx-2 animate-pulse'/></p>
      </Link>
      </div>
      
    </div>
  )
}

export default Error404;
