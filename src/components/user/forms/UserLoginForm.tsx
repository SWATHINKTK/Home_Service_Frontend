import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const UserLoginForm = () => {
  return (
    <>
    <div className="my-6">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <MdEmail className="text-gray-500" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                placeholder="First name"
              />
            </div>

            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <RiLockPasswordFill className="text-gray-500" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                placeholder="Password"
              />
              
            </div>
          </div>

          <button className="login-btn md:w-[100%] w-full font-Montserrat">
            Sign in
          </button>

            <h6 className="my-3 font-Montserrat font-[400] text-[12px]">Don't have an account ? <Link to='/register' className="font-[600] text-[14px] text-[#385185]" >Sign up</Link> </h6>
    </>
  )
}

export default UserLoginForm;
