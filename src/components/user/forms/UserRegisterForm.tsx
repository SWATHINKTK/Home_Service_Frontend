import React from 'react'
import { Link } from 'react-router-dom';

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";


const UserRegisterForm = () => {
  return (
    <>
    <div className="my-6 flex flex-col gap-y-5">
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                placeholder="Username"
              />
            </div>

            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <MdEmail className="text-gray-500" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                placeholder="Email"
              />
              
            </div>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaLocationDot className="text-gray-500" />
              </div>
              <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-8"
                >
                  <option selected>Choose Your Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              
            </div>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaPhoneAlt className="text-gray-500" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                placeholder="Phonenumber"
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
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <RiLockPasswordFill className="text-gray-500" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                placeholder="Re Enter Password"
              />
              
            </div>
          </div>

          <button className="login-btn md:w-[100%] w-full font-Montserrat">
            Sign up
          </button>

            <h6 className="my-3 font-Montserrat font-[400] text-[12px]">Don't have an account ? <Link to='/login' className="font-[600] text-[14px] text-[#385185]" >Sign in</Link> </h6>
    </>
  )
}

export default UserRegisterForm
