import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const WorkerFooter:React.FC = () => {
  return (
    <div>
      <footer className="bg-[#F5F5F5] mt-20 dark:bg-gray-900">
        <div className="lg:w-[80%] w-[100%] mx-auto ">
          <div className="container px-6 pt-12 pb-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-SegoeUI">
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Quick Link
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    Booking
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                   About
                  </a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Company
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    Helps
                  </a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  For Customers
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                   Register
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    Login
                  </a>
                 
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Contact Us
                </p>
                <div className="flex  items-center gap-4 mt-5">
                  <CiFacebook size={25}/>
                  <BsInstagram size={23}/>
                  <FaLinkedin size={29} />
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 md:my-5 dark:border-gray-700" />
            <div className="flex flex-col items-center justify-between sm:flex-row ">
              <a href="#">
                <img
                  className="w-auto h-7"
                  src="/public/logo.svg"
                  alt=""
                />
              </a>
              <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
                © Copyright 2021. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkerFooter;
