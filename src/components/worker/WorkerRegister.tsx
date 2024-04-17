import React from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuFileBadge2 } from "react-icons/lu";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { FaCity } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./css/login.css";

const WorkerRegister = () => {
  return (
    <>
      <div className="login-main-div flex flex-col-reverse md:flex-row md:h-[100vh] pt-10">
        <div className="md:w-[55%] w-[100%] flex flex-col justify-center md:px-32 px-5 py-7 md:py-0">
          <div className="mb-1">
            <h1 className="font-Montserrat tracking-wide font-[700] text-[2.5rem]">
              Register
            </h1>
            <h6 className="font-[400]  text-[0.9rem] text-gray-500">
              Register to access your worker account
            </h6>
          </div>
          <div className="container mx-auto mt-5">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">

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
                  <FaPhoneAlt className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Phone Number"
                />
              </div>

              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdOutlineMiscellaneousServices className="text-gray-500" />
                </div>
                {/* <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Service"
                /> */}
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-8 ">
    <option selected>Choose a Service</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
              </div>

              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  {/* <BsGlobeCentralSouthAsia className="text-gray-500" /> */}
                  <FaLocationDot className="text-gray-500" />

                </div>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-8">
    <option selected>Choose Your Country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
              </div>

              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaCity className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Location"
                />
              </div>

              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <PiCertificateFill className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Qualification"
                />
              </div>

              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiUserStarFill className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Experience"
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
                  placeholder="Re enter password"
                />
              </div>
              <div>
                <button className="login-btn md:w-[100%] w-full font-Montserrat">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <h6 className="my-3 font-Montserrat font-[400] text-[12px]">
            Already have an account ?{" "}
            <Link
              to="/worker/login"
              className="font-[600] text-[14px] text-[#385185]"
            >
              Sign in
            </Link>
          </h6>
          <p className="font-Montserrat font-[300] text-[12px] text-gray-900 mt-1">
            By registering you with our{" "}
            <a className="text-[#9D5CE9] font-[500]" href="">
              Terms and Conditions
            </a>
          </p>
        </div>

        <div className=" md:w-[45%] w-[100%] flex justify-center place-items-end">
          <img
            src="/public/user/image.png"
            className="md:h-[70vh] w-auto md:rounded-none rounded-b-[25%]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WorkerRegister;
