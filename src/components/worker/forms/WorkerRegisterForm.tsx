import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { FaCity } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { IService } from "../../../@types/service";
import { fetchAllServicesAPI } from "../../../utils/api/serviceAPI";
import { useForm } from "react-hook-form";
import { IWorker } from "../../../@types/worker";
import { ULCaseCheckRegex, emailRegex, mobileNumberRegex, numberRegex, specialCharacterCheckRegex } from "../../../constants/regex";
// import { sendOTPWithPhoneNumber } from "../../config/otpVerificationFirebase";
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { storeWorkerRegisterData } from "../../../reducers/worker/workerSlice";
import { toast } from "react-toastify";

import '../css/login.css';

const WorkerRegisterForm:React.FC = () => {

  const [services, setServices] = useState<IService[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState:{ errors } } = useForm<IWorker & {password:string }>();


  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetchAllServicesAPI();
      setServices(response.data);
    };
    fetchServices();
  }, []);

  const createRequiredValidator = (fieldName: string) => (value: string) => {
    return !value.trim() ? `${fieldName} is required.` : undefined;
  };

  const validatePassword = (value: string): boolean | string => {
    if (!ULCaseCheckRegex.test(value)) {
      return "password must contain at least one uppercase and one lowercase letter.";
    }
    if (!specialCharacterCheckRegex.test(value)) {
      return "password contain at least one of the specified special characters:";
    }
    return true;
  };


  const handleWorkerRegistration = async(registerData:IWorker) => {
     if (registerData.password !== registerData.confirmPassword) {
      return setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    }
    // const confirmationResultFirebase = await sendOTPWithPhoneNumber(registerData.phoneNumber,"registerBtn");
    // registerData.confirmationResultFirebase = confirmationResultFirebase;
    dispatch(storeWorkerRegisterData(registerData));
    toast.success("Upload Relevant Documents");
    navigate("/worker/register/upload");
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleWorkerRegistration)}>
        <div className="container mx-auto w-full mt-5">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3">
            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Username"
                  {...register("username", {
                    required: "username must required.",
                    minLength: {
                      value: 3,
                      message: "first name must be at least 3 characters.",
                    },
                    maxLength: {
                      value: 18,
                      message: "first name cannot exceed 18 characters.",
                    },
                    validate: createRequiredValidator("username"),
                  })}
                />
              </div>
              {errors.username && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.username.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdEmail className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Email"
                  {...register("email", {
                    required: "email is required.",
                    pattern: {
                      value: emailRegex,
                      message:
                        "invalid email format. Please enter a valid email address.",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.email.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaPhoneAlt className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: "phone number is required.",
                    pattern: {
                      value: mobileNumberRegex,
                      message:
                        "invalid mobile number format.It should consist of 10 digits.",
                    },
                  })}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.phoneNumber.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdOutlineMiscellaneousServices className="text-gray-500" />
                </div>

                <select
                  id="service"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-8 "
                  {...register("service", {
                    required: "service is required.",
                  })}
                >
                  {services.map((service, index) => (
                    <option
                      key={service._id || index}
                      value={service._id}
                      selected={index === 0}
                    >
                      {service.serviceName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  {/* <BsGlobeCentralSouthAsia className="text-gray-500" /> */}
                  <FaLocationDot className="text-gray-500" />
                </div>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-8"
                  {...register("district", {
                    required: "district is required.",
                  })}
                >
                  <option value="Calicut" selected>
                    Calicut
                  </option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasargod">Kasargod</option>
                  <option value="Wayanad">Wayanad</option>
                </select>
              </div>
            </div>
            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaCity className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Location"
                  {...register("location", {
                    required: "location is required.",
                    validate: createRequiredValidator("location"),
                  })}
                />
              </div>
              {errors.location && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.location.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <PiCertificateFill className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Qualification"
                  {...register("qualification", {
                    required: "qualification is required.",
                    validate: createRequiredValidator("qualification"),
                  })}
                />
              </div>
              {errors.qualification && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.qualification.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiUserStarFill className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Experience years"
                  {...register("experience", {
                    required: "experience is required.",
                    pattern: {
                      value: numberRegex,
                      message: "experience must be a number.",
                    },
                  })}
                />
              </div>
              {errors.experience && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.experience.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordFill className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Password"
                  {...register("password", {
                    required: "password must be required.",
                    minLength: {
                      value: 3,
                      message: "password must be at least 5 characters.",
                    },
                    validate: validatePassword,
                    maxLength: {
                      value: 16,
                      message: "password cannot exceed 16 characters.",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.password.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordFill className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
                  placeholder="Re enter password"
                  {...register("confirmPassword", {
                    required: "password must be required.",
                    minLength: {
                      value: 3,
                      message: "password must be at least 5 characters.",
                    },
                    maxLength: {
                      value: 16,
                      message: "password cannot exceed 16 characters.",
                    },
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.confirmPassword.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <button
                id="registerBtn"
                className="login-btn md:w-[100%] w-full font-Montserrat"
              >
                Upload Documents
              </button>
            </div>
          </div>
        </div>
      </form>

      <h6 className="my-3 font-Montserrat font-[400] text-[12px]">
        Already have an account ?{" "}
        <Link
          to="/worker/login"
          className="font-[600] text-[14px] text-[#385185]"
        >
          Sign in
        </Link>
      </h6>
    </>
  );
};

export default WorkerRegisterForm;
