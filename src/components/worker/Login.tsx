import React from "react";

import "./css/login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-main-div flex flex-col-reverse md:flex-row md:h-[100vh] pt-10">
        <div className="md:w-[50%] w-[100%] flex flex-col justify-center md:px-52 px-5 py-7 md:py-0">
          <div className="mb-1"> 
            <h1 className="font-Montserrat tracking-wide font-[700] text-[2.5rem]">Login</h1>
            <h6 className="font-[400]  text-[0.9rem] text-gray-500">Login to access your worker account</h6>
          </div>
          <div className="my-6">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-shield-lock-fill text-gray-500 dark:text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"
                  />
                </svg>
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

            <h6 className="my-3 font-Montserrat font-[400] text-[12px]">Don't have an account ? <Link to='/worker/register' className="font-[600] text-[14px] text-[#385185]" >Sign up</Link> </h6>
            <p className="font-Montserrat font-[300] text-[12px] text-gray-900 mt-1">By registering you with our <a className="text-[#9D5CE9] font-[500]" href="">Terms and Conditions</a></p>
        </div>

        <div className=" md:w-[50%] w-[100%] flex justify-center place-items-end">
          <img src="/public/user/image.png" className="md:h-[70vh] w-auto md:rounded-none rounded-b-[25%]" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
