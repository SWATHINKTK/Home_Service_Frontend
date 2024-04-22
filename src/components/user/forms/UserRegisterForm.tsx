import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

import { IUser } from "../../../@types/user";

const UserRegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IUser>();

  const validatePassword = (value: string): boolean | string => {
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value)) {
      return "password must contain at least one uppercase and one lowercase letter.";
    }
    if (!/^.*[@$!%*?&].*$/.test(value)) {
      return "password contain at least one of the specified special characters:";
    }
    return true;
  };

  const onSubmit = (data: IUser) => {
    if (data.password !== data.confirmPassword) {
      return setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5 mt-10 flex flex-col ">
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaUser className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              placeholder="First name"
              {...register("firstname", {
                required: "first name is required.",
                minLength: {
                  value: 3,
                  message: "first name must be at least 3 characters.",
                },
                maxLength: {
                  value: 18,
                  message: "first name cannot exceed 18 characters.",
                },
              })}
            />
          </div>
          {errors.firstname && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.firstname.message?.toString()}
            </p>
          )}

          <div className={`${errors.firstname ? "mt-2" : "mt-3.5"} relative `}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaUser className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              placeholder="Last name"
              {...register("lastname", {
                required: "last name is required.",
                minLength: {
                  value: 3,
                  message: "last name must be at least 3 characters.",
                },
                maxLength: {
                  value: 18,
                  message: "last name cannot exceed 18 characters.",
                },
              })}
            />
          </div>
          {errors.lastname && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.lastname.message?.toString()}
            </p>
          )}

          <div className={`${errors.lastname ? "mt-2" : "mt-3.5"} relative `}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <MdEmail className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              placeholder="Email"
              {...register("email", {
                required: "email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "invalid email format. Please enter a valid email address.",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.email.message?.toString()}
            </p>
          )}

          <div className={`${errors.email ? "mt-2" : "mt-3.5"} relative `}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaLocationDot className="text-gray-500" />
            </div>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              {...register("district", {
                required: "district is required.",
              })}
            >
              <option selected>Choose Your District</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          {errors.district && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.district.message?.toString()}
            </p>
          )}

          <div className={`${errors.district ? "mt-2" : "mt-3.5"} relative `}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaPhoneAlt className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              placeholder="Phone number"
              {...register("phoneNumber", {
                required: "phone number is required.",
                pattern: {
                  value: /^[6789]\d{9}$/,
                  message:
                    "invalid mobile number format.It should consist of 10 digits.",
                },
              })}
            />
          </div>
          {errors.phoneNumber && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.phoneNumber.message?.toString()}
            </p>
          )}

          <div
            className={`${errors.phoneNumber ? "mt-2" : "mt-3.5"} relative `}
          >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <RiLockPasswordFill className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              placeholder="Password"
              {...register("password", {
                required: "password must be required.",
                minLength: {
                  value: 3,
                  message: "password must be at least 5 characters.",
                },
                validate: validatePassword,
                maxLength: {
                  value: 8,
                  message: "password cannot exceed 8 characters.",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.password.message?.toString()}
            </p>
          )}

          <div className={`${errors.password ? "mt-2" : "mt-3.5"} relative `}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <RiLockPasswordFill className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
              placeholder="Re Enter Password"
              {...register("confirmPassword", {
                required: "password must be required.",
                minLength: {
                  value: 3,
                  message: "password must be at least 5 characters.",
                },
                maxLength: {
                  value: 8,
                  message: "password cannot exceed 8 characters.",
                },
              })}
            />
          </div>
          {errors.confirmPassword && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.confirmPassword.message?.toString()}
            </p>
          )}
        </div>

        <button className="login-btn md:w-[100%] w-full font-Montserrat">
          Sign up
        </button>
      </form>

      <h6 className="my-3 font-Montserrat font-[400] text-[12px]">
        Don't have an account ?{" "}
        <Link to="/login" className="font-[600] text-[14px] text-[#385185]">
          Sign in
        </Link>{" "}
      </h6>
    </>
  );
};

export default UserRegisterForm;
