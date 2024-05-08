import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./adminMainComponent.css";


interface AdminMainComponentProb {
  content: React.ReactNode;
}

const AdminMainComponent: React.FC<AdminMainComponentProb> = ({ content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarToggle, setIsNavbarToggle] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <div
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64  h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } ${isNavbarToggle ? "hidden" : ""} -translate-x-full sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#F8F8F8] dark:bg-gray-800 shadow-md  ">
          <div className="flex items-center justify-center mb-10 mt-2">
            <img
              src="/public/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Logo"
            />
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
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </button>
            </li>
            <hr />
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdEngineering className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  New Worker
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdMessage className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdOutlineLogout className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${isNavbarToggle ? "ml-0" : "md:ml-64"} fixed w-full z-40`}
      >
        <nav className="bg-[#FCFAFA] border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              className="hidden md:block"
              onClick={() => setIsNavbarToggle((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div className={`${isNavbarToggle ? "ml-0" : "md:ml-64"} fixed w-full h-[100vh] p-6 bg-[#F5F5F5]`}>
        {/* Right side Content loading */}
        {content}
      </div>
    </>
  );
};

export default AdminMainComponent;
