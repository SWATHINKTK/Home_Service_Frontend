import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { workerProfileAPI, workerProfileUpdateAPI } from "../../../utils/api/workerAPI";
import { IWorker } from "../../../@types/worker";
import { updateWorkerData } from "../../../reducers/worker/workerSlice";

const url =
  "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

const WorkerProfile: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IWorker>();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [workerData, setWorkerData] = useState<IWorker | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await workerProfileAPI();
      setWorkerData(response.data);
      if (response.data.profile) {
        setImageUrl(response.data.profile);
      } else {
        setImageUrl(url);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (isEditProfile && workerData) {
      setValue("username", workerData.username);
      setValue("email", workerData.email);
      setValue("phoneNumber", workerData.phoneNumber);
      setValue("district", workerData.district);
      setValue("location", workerData.location);
    }
  }, [imageUrl, isEditProfile, setValue, workerData]);

  const handleDivClick = () => {
    if (isEditProfile) {
      fileInputRef.current?.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageFile(file);
    }
  };

  const editButtonClick = () => {
    setImageUrl(workerData?.profile ?? imageUrl);
    setIsEditProfile(true);
  };

  const onCancel = () => {
    setIsEditProfile(false);
    setImageUrl(workerData?.profile ?? url);
    reset();
  };

  const onSubmit = async(editData: IWorker) => {
    const formDataToSend = new FormData();
    Object.entries(editData).forEach(([key,value]) => formDataToSend.append(key, value));
    if(imageFile){
      formDataToSend.append("profile", imageFile as Blob);
    }
    const response = await workerProfileUpdateAPI(formDataToSend);
    toast.success(response.message);
    editData.profile = imageUrl;
    setWorkerData(editData);
    setIsEditProfile(false);
    dispatch(updateWorkerData(editData));
  };

  return (
    <div className="about-section px-4">
      <h1 className="text-2xl font-bold mb-1">Account Information</h1>
      <p className="font-thin text-sm pl-1 mb-6">
        user/ <span className="font-semibold">Manage profile</span>
      </p>
      <hr className="border-t-2 border-black opacity-15" />

      <div className="flex justify-between">
        <div className="head font-sans  text-bold pl-4 mt-5 mb-4">About Me</div>
        <div className="but pr-5 pt-5">
          {!isEditProfile && (
            <button
              onClick={editButtonClick}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse  gap-10 bg-white rounded-lg p-6">
        <div className=" text-md w-10/12 font-light  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-x-7 gap-y-4 grid-rows-3">
              <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                <div className="flex justify-center flex-col mx-2 ">
                  <h5 className="text-sm font-semibold">Firstname</h5>
                  {isEditProfile ? (
                    <input
                      type="text"
                      className="text-[1rem] border-b-2 max-w-64 border-black outline-none bg-transparent"
                      {...register("username", {
                        required: "worker name is required",
                      })}
                    />
                  ) : (
                    <h2>{workerData?.username}</h2>
                  )}

                  {errors.username && isEditProfile && (
                    <p className="text-[11px] -mt-1  text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                <div className="flex justify-center flex-col mx-2 ">
                  <h5 className="text-sm font-semibold">Lastname</h5>
                  {isEditProfile ? (
                    <input
                      type="text"
                      className="text-[1rem] border-b-2 max-w-64 border-black outline-none bg-transparent"
                      {...register("email", {
                        required: "email is required",
                      })}
                    />
                  ) : (
                    <h2>{workerData?.email}</h2>
                  )}

                  {errors.email && isEditProfile && (
                    <p className="text-[11px] -mt-1  text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                <div className="flex justify-center flex-col mx-2 ">
                  <h5 className="text-sm font-semibold">Email</h5>
                  <h2>{workerData?.phoneNumber}</h2>
                </div>
              </div>
              

              <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                <div className="flex justify-center flex-col mx-2 ">
                  <h5 className="text-sm font-semibold">District</h5>
                  {isEditProfile ? (
                    <select
                      id="Districts"
                      className="text-[1rem] border-b-2 max-w-64 border-black outline-none bg-transparent"
                      {...register("district", {
                        required: "district is required.",
                      })}
                    >
                      <option
                        value="Calicut"
                        selected={workerData?.district == "Calicut"}
                      >
                        Calicut
                      </option>
                      <option value="Kannur">Kannur</option>
                      <option
                        value="Kasargod"
                        selected={workerData?.district == "Kannur"}
                      >
                        Kasargod
                      </option>
                      <option
                        value="Wayanad"
                        selected={workerData?.district == "Kannur"}
                      >
                        Wayanad
                      </option>
                    </select>
                  ) : (
                    <h2>{workerData?.district}</h2>
                  )}

                  {errors.district && isEditProfile && (
                    <p className="text-[11px] -mt-1  text-red-500">
                      {errors.district.message}
                    </p>
                  )}
                </div>
              </div>

              <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                <div className="flex justify-center flex-col mx-2 ">
                  <h5 className="text-sm font-semibold">Location</h5>
                  {isEditProfile ? (
                    <input
                      type="text"
                      className="text-[1rem] border-b-2 max-w-64 border-black outline-none bg-transparent"
                      {...register("location", {
                        required: "location is required",
                      })}
                    />
                  ) : (
                    <h2>{workerData?.location}</h2>
                  )}

                  {errors.location && isEditProfile && (
                    <p className="text-[11px] -mt-1  text-red-500">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {isEditProfile && (
              <div className="flex gap-2 mt-4">
                <button
                  className="text-[1rem] font-semibold px-5 p-0  rounded-md bg-[#0D9276]"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="text-[1rem] font-semibold px-5 p-0  rounded-md bg-[#994a44]"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
        <div className=" min-w-52" onClick={handleDivClick}>
          <img
            className="h-52 w-52 object-cover"
            src={imageUrl}
            alt="profile image"
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={(el) => {
              if (el) fileInputRef.current = el;
            }}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
