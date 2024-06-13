import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { userAuth } from "../../../reducers/user/middlewares/userLoginThunk";
import { ULCaseCheckRegex, emailRegex, specialCharacterCheckRegex } from "../../../constants/regex";
// import GoogleAuthButton from "../GoogleAuthentication/GoogleAuthButton";


interface LoginData{
    username: string;
    password: string;
}


const UserLoginForm: React.FC = () => {

    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>();

     useEffect(() => {
        if(user){
            navigate('/',{replace:true})
        }
     },[user, navigate])
   

   

    const validatePassword = (value: string): boolean | string => {
        if (!ULCaseCheckRegex.test(value)) {
            return "password must contain at least one uppercase and one lowercase letter.";
        }
        if (!specialCharacterCheckRegex.test(value)) {
            return "password contain at least one of the specified special characters:";
        }
        return true;
    };

    const onSubmit = (data: LoginData) => {
        dispatch(userAuth(data))
        console.log(data);
    };
    return (
        <>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-6">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <MdEmail className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[100%] w-full ps-10 p-2"
                            placeholder="Email"
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

                    <div className={`${errors.username ? "mt-2.5" : "mt-3.5"} relative `}>
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

            <div className="w-full my-2  flex place-items-center justify-between">
                <hr className="w-[45%]" />
                <span className="font-Montserrat font-[500] text-gray-600">or</span>
                <hr className="w-[45%]" />
            </div>

            
                <div className="mx-auto">
                {/* <GoogleAuthButton/> */}

                </div>

            

            <h6 className="my-3 font-Montserrat font-[400] text-[12px]">
                Don't have an account ?
                <Link to="/register" className="font-[600] text-[14px] text-[#385185]">
                    Sign up
                </Link>
            </h6>
        </>
    );
};

export default UserLoginForm;
