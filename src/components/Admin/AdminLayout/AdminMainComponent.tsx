import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
// import { MdEngineering } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";

import "./adminMainComponent.css";
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { adminLogout } from "../../../reducers/admin/adminAuthSlicer";


interface AdminMainComponentProb {
  content: React.ReactNode;
}

const AdminMainComponent: React.FC<AdminMainComponentProb> = ({ content }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  return (
    <>
    <div className="flex">
      <div className={` top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 md:block hidden`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#F8F8F8] dark:bg-gray-800 shadow-md  ">
          <div className="flex items-center justify-center mb-10 mt-2">
            <img src="/logo/logo.png" className="h-6 me-3 sm:h-7" alt="Logo"/>
          </div>
          <ul className="space-y-2 font-medium px-6">
            <li className="">
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group" onClick={() => navigate('/admin')}>
                <MdSpaceDashboard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => navigate('/admin/user')}>
                <PiUsersBold className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => navigate('/admin/worker')}>
                <FaUsersCog className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Workers</span>
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => navigate('/admin/service')}>
                <GrServices className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
              </button>
            </li>
            <hr />
            <li>
              <Link to={'/admin/bookings'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >
                <FaListCheck className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Bookings
                </span>
              </Link>
            </li>
            <li>
            <Link to={'/admin/salesReport'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdFormatListBulleted className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sales Report</span>
              </Link>
            </li>
            <hr />
            <li>
              <button onClick={() => dispatch(adminLogout())} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdOutlineLogout className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={` w-full h-[100vh] overflow-y-auto bg-[#F5F5F5]`}>
        <div className="h-16 bg-[#F8F8F8] drop-shadow-sm">
        </div>
        {content}
      </div>
      </div>
    </>
  );
};

export default AdminMainComponent;
