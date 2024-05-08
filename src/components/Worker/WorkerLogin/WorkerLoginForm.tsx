import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { ULCaseCheckRegex, emailRegex, specialCharacterCheckRegex } from '../../../constants/regex';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { workerAuth } from '../../../reducers/worker/middlewares/workerLoginThunk';


interface IWorkerLogin {
  username: string,
  password: string
}

const WorkerLoginForm: React.FC = () => {

  const { worker } = useAppSelector((state) => state.workerSlice)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorkerLogin>();

  useEffect(() => {
    if (worker) {
      navigate('/worker', { replace: true })
    }
  }, [navigate, worker]);

  const validatePassword = (value: string): boolean | string => {
    if (!ULCaseCheckRegex.test(value)) {
      return "password must contain at least one uppercase and one lowercase letter.";
    }
    if (!specialCharacterCheckRegex.test(value)) {
      return "password contain at least one of the specified special characters:";
    }
    return true;
  };

  const handleLogin = (data: IWorkerLogin) => {
      dispatch(workerAuth(data))
      console.log(data);
  };
  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit(handleLogin)}>
        <div className="mt-6 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <MdEmail className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2.5  "
              placeholder="Username"
              {...register("username", {
                required: "username is required.",
                pattern: {
                  value: emailRegex,
                  message:
                    "invalid email format. Please enter a valid email address.",
                },
              })}
            />
          </div>
          {errors.username && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.username.message?.toString()}
            </p>
          )}

          <div className={`relative ${errors.username ? 'mt-2' : 'mt-5'}`}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <RiLockPasswordFill className="text-gray-500" />
            </div>
            <input
              type="text"
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
                  value: 12,
                  message: "password cannot exceed 12 characters.",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="mx-3 mt-0.5 text-red-500 text-xs italic">
              * {errors.password.message?.toString()}
            </p>
          )}
        </div>

        <button className="login-btn md:w-[100%] w-full font-Montserrat">
          Sign in
        </button>
      </form>

      <h6 className="my-3 font-Montserrat font-[400] text-[12px]">
        Don't have an account ?{" "}
        <Link
          to="/worker/register"
          className="font-[600] text-[14px] text-[#385185]"
        >
          Sign up
        </Link>{" "}
      </h6>
    </>
  );
}

export default WorkerLoginForm