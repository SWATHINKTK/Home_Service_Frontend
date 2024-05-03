import axios, { AxiosError } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AdminData {
    username: string;
    password: string;
}

const AdminLogin = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AdminData>();

    const onSubmit = async(value: AdminData) => {
        try {
            const response = await axios.post('/api/admin/login',value);
            if(response.data.success){
                navigate('/admin')
            }
        } catch (error) {
            if(error instanceof AxiosError && error.response){
                toast.error(error.response.data.error[0].message)
            }
            throw error;
        }
    };
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
            <div className="md:w-[26%] w-[100%] h-auto flex flex-col place-items-center p-5 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl ">
                <div className="mt-3 mb-8">
                    <img
                        src="/public/logo.svg"
                        className="md:h-10 h-8 hidden md:block"
                        alt=" Logo"
                    />
                </div>

                <div className="w-full px-4 my-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                placeholder="Username"
                                className={`peer h-full w-full border-b ${errors.username ? 'border-red-500' :'border-black'} bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100`}
                                {...register('username', {
                                    required: "username is required.",
                                    pattern: {
                                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                      message:
                                        "invalid email format. Please enter a valid email address.",
                                    },
                                })}
                            />
                            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Username
                            </label>
                        </div>
                        {errors.username && (
                        <p className=" mt-0.5 text-red-500 text-xs ">
                            * {errors.username.message?.toString()}
                        </p>
                    )}

                        <div className="relative h-11 w-full min-w-[200px] mt-4">
                            <input
                                placeholder="Password"
                                className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                {...register("password", {
                                    required: "password must be required.",
                                    minLength: {
                                        value: 3,
                                        message: "password must be at least 5 characters.",
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "password cannot exceed 12 characters.",
                                    },
                                })}
                            />
                            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        {errors.password && (
                        <p className=" mt-0.5 text-red-500 text-xs ">
                            * {errors.password.message?.toString()}
                        </p>
                    )}
                        <button
                            className="select-none w-full mt-8 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
