import axios, {  AxiosError } from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TiPlus } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface ServiceData {
  serviceName: string;
  minimumAmount: string;
  hourlyAmount: string;
  serviceDescription: string;
  icon: File;
  image: File;
}

const AddServiceForm: React.FC = () => {
    const fileInputRefs = useRef<[HTMLInputElement | null, HTMLInputElement | null]>([null, null]);
    const [imageUrl, setImageUrl] = useState<[string | null, string | null]>([null, null]);
    const [imageFile, setImageFile] = useState<[File | null, File | null]>([null, null]);
    const [imageError, setImageError ] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<ServiceData>();


    const handleDivClick = (index: number) => {
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index]?.click();
        }
    }

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            if (index === 0) {
                setImageUrl([url, imageUrl[1]]);
                setImageFile([file, imageFile[1]]);
            } else if (index === 1) {
                setImageUrl([imageUrl[0], url]);
                setImageFile([imageFile[0], file]);
            }
        }
    }

    const createRequiredValidator = (fieldName: string) => (value: string) => {
      return !value.trim() ? `${fieldName} is required.` : undefined;
    };

    const onSubmit = async(data:ServiceData) => {
        if (!imageFile[0] || !imageFile[1]) {
          setImageError("Please upload both icon and image.");
          return;
        }
        const formDataToSend = new FormData();
        Object.entries(data).forEach(([key,value]) => formDataToSend.append(key, value));
        formDataToSend.append("icon", imageFile[0] as Blob);
        formDataToSend.append("image", imageFile[1] as Blob);
        try {
            const newService = await axios.post('/api/admin/service/add',formDataToSend);
            toast.success(newService.data.message, {
              onClose: () => {navigate("/admin/service");},
            });
        } catch (error) {
            console.log(error)
            if(error instanceof AxiosError){
                toast.error(error.response?.data.errors[0].message);
            }
        }
    };

    return (
      <div className="mt-20 w-[82%]">
        <div className="flex justify-between mb-3 mx-7">
          <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider ">
            Add Service
          </h1>
        </div>
        <div
          className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[90%] mx-7">
              <div className="relative w-full min-w-[200px] h-10 mt-2">
                <input
                  className="peer w-full border-black h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-1 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  {...register("serviceName", {
                    required: "Service name is required",
                    validate: createRequiredValidator("Service name"),
                  })}
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Service Name
                </label>
              </div>
              {errors.serviceName && (
                <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                  * {errors.serviceName.message?.toString()}
                </p>
              )}

              <div className="md:flex  gap-4 mt-2">
                <div className="w-full">
                  <div className="relative w-full min-w-[200px] h-10 mt-2">
                    <input
                      className="peer w-full border-black h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-1 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      {...register("minimumAmount", {
                        required: "Minimum Price is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a valid minimum price",
                        },
                        validate: (value) =>
                          parseFloat(value) > 0 ||
                          "Minimum Price must be greater than 0",
                      })}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Minimum Charge
                    </label>
                  </div>
                  {errors.minimumAmount && (
                    <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                      * {errors.minimumAmount.message?.toString()}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <div className="relative w-full min-w-[200px] h-10 mt-2">
                    <input
                      className="peer w-full border-black h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-1 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      {...register("hourlyAmount", {
                        required: "Hourly Price is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a valid Hourly price",
                        },
                        validate: (value) =>
                          parseFloat(value) > 0 ||
                          "Hourly Price must be greater than 0",
                      })}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Hourly Charge
                    </label>
                  </div>
                  {errors.hourlyAmount && (
                    <p className="mx-3 mt-0.5 text-red-500 text-xs ">
                      * {errors.hourlyAmount.message?.toString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full mt-5">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-black border-t-1 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    {...register("serviceDescription", {
                      required: "Service description is required",
                      validate: createRequiredValidator("Service description"),
                    })}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Service Description
                  </label>
                </div>
                {errors.serviceDescription && (
                  <p className="mx-3 text-red-500 text-xs ">
                    * {errors.serviceDescription.message?.toString()}
                  </p>
                )}
              </div>
              <div className="mt-4 flex gap-5">
                <div
                  className="w-24 h-24 border rounded-md border-black flex flex-col justify-center items-center"
                  onClick={() => handleDivClick(0)}
                  style={{
                    backgroundImage: imageUrl[0]
                      ? `url(${imageUrl[0]})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!imageUrl[0] && (
                    <>
                      <TiPlus size={30} />
                      <h6 className="mt-1  font-semibold">Add Icon</h6>
                    </>
                  )}
                  <input
                    type="file"
                    accept=".png"
                    style={{ display: "none" }}
                    ref={(el) => {
                      if (el) fileInputRefs.current[0] = el;
                    }}
                    onChange={(e) => handleChange(0, e)}
                  />
                </div>
                <div
                  className="w-24 h-24 border rounded-md border-black flex flex-col justify-center items-center"
                  onClick={() => handleDivClick(1)}
                  style={{
                    backgroundImage: imageUrl[1]
                      ? `url(${imageUrl[1]})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!imageUrl[1] && (
                    <>
                      <TiPlus size={30} />
                      <h6 className="mt-1  font-semibold">Add Image</h6>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={(el) => {
                      if (el) fileInputRefs.current[1] = el;
                    }}
                    onChange={(e) => handleChange(1, e)}
                  />
                </div>
              </div>
              {imageError && (
                <p className="mx-3 text-red-500 text-xs ">* {imageError}</p>
              )}
              <button
                className=" mt-5 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="submit"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddServiceForm
