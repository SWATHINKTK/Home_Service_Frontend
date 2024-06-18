import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TbCameraPlus } from "react-icons/tb";
import { toast } from "react-toastify";


import { IUser } from "../../../@types/user";
import { manageUserProfileAPI, userProfileAPI } from "../../../utils/api/userAPI";
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { updateUserData } from "../../../reducers/user/userSlice";

const url =
    "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

const UserProfile: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<IUser>();
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [userData, setUserData] = useState<IUser | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await userProfileAPI();
            setUserData(response.data);
            if (response.data.profile) {
                setImageUrl(response.data.profile);
            } else {
                setImageUrl(url);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        if (isEditProfile && userData) {
            setValue("firstname", userData.firstname);
            setValue("lastname", userData.lastname);
            setValue("email", userData.email);
            setValue("phoneNumber", userData.phoneNumber);
            setValue("district", userData.district);
        }
    }, [imageUrl, isEditProfile, setValue, userData]);

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
        setImageUrl(userData?.profile ?? imageUrl);
        setIsEditProfile(true);
    };

    const onCancel = () => {
        setIsEditProfile(false);
        setImageUrl(userData?.profile ?? url);
        reset();
    };

    const onSubmit = async (editData: IUser) => {
        const formDataToSend = new FormData();
        Object.entries(editData).forEach(([key, value]) => formDataToSend.append(key, value));
        if (imageFile) {
            formDataToSend.append("profile", imageFile as Blob);
        }
        const response = await manageUserProfileAPI(formDataToSend);
        toast.success(response.message);
        editData.profile = imageUrl;
        setUserData(editData);
        setIsEditProfile(false);
        dispatch(updateUserData(editData));
    };

    return (
        <>
            <div className='sticky md:top-0 top-0 pb-3 px-4 font-Montserrat bg-white'>
                <h1 className="md:text-2xl font-bold text-3xl mb-1 md:text-left text-center">Account Information</h1>
                <p className="md:block hidden font-thin text-sm pl-1 mb-6">
                    profile/ <span className="font-semibold">Account Information</span>
                </p>
                <hr className="border-t-2 border-black opacity-15" />
            </div>
            <div className="about-section px-4">
                <div className="flex justify-between md:px-4">
                    <div className="head font-sans  text-bold mt-5 mb-4">About Me</div>
                    <div className="pt-5">
                        {!isEditProfile && (
                            <button className="md:text-white text-blue-900 md:bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={editButtonClick}>
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col-reverse items-center gap-10 bg-white rounded-lg md:p-6">
                    <div className=" text-md md:w-10/12 w-full font-light">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid lg:grid-cols-2  grid-cols-1 gap-x-7 gap-y-4 grid-rows-3">
                                <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                                    <div className="flex justify-center flex-col mx-2 ">
                                        <h5 className="text-sm font-semibold">Firstname</h5>
                                        {isEditProfile ? (
                                            <input
                                                type="text"
                                                className="text-[1rem] border-b-2 max-w-64 border-black outline-none bg-transparent"
                                                {...register("firstname", {
                                                    required: "First name is required",
                                                })}
                                            />
                                        ) : (
                                            <h2>{userData?.firstname}</h2>
                                        )}

                                        {errors.firstname && isEditProfile && (
                                            <p className="text-[11px] -mt-1  text-red-500">
                                                {errors.firstname.message}
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
                                                {...register("lastname", {
                                                    required: "First name is required",
                                                })}
                                            />
                                        ) : (
                                            <h2>{userData?.lastname}</h2>
                                        )}

                                        {errors.lastname && isEditProfile && (
                                            <p className="text-[11px] -mt-1  text-red-500">
                                                {errors.lastname.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                                    <div className="flex justify-center flex-col mx-2 ">
                                        <h5 className="text-sm font-semibold">Email</h5>
                                        <h2>{userData?.email}</h2>
                                    </div>
                                </div>
                                <div className=" bg-[#F2F2F2] py-1  px-5 rounded-xl flex items-center">
                                    <div className="flex justify-center flex-col mx-2 ">
                                        <h5 className="text-sm font-semibold">PhoneNumber</h5>
                                        {isEditProfile ? (
                                            <input
                                                type="text"
                                                className="text-[1rem] border-b-2 max-w-64 border-black outline-none bg-transparent"
                                                {...register("phoneNumber", {
                                                    required: "First name is required",
                                                })}
                                            />
                                        ) : (
                                            <h2>{userData?.phoneNumber}</h2>
                                        )}

                                        {errors.phoneNumber && isEditProfile && (
                                            <p className="text-[11px] -mt-1  text-red-500">
                                                {errors.phoneNumber.message}
                                            </p>
                                        )}
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
                                                    selected={userData?.district == "Calicut"}
                                                >
                                                    Calicut
                                                </option>
                                                <option value="Kannur">Kannur</option>
                                                <option
                                                    value="Kasargod"
                                                    selected={userData?.district == "Kannur"}
                                                >
                                                    Kasargod
                                                </option>
                                                <option
                                                    value="Wayanad"
                                                    selected={userData?.district == "Kannur"}
                                                >
                                                    Wayanad
                                                </option>
                                            </select>
                                        ) : (
                                            <h2>{userData?.district}</h2>
                                        )}

                                        {errors.district && isEditProfile && (
                                            <p className="text-[11px] -mt-1  text-red-500">
                                                {errors.district.message}
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
                    <div className="relative min-w-52 md:rounded-none rounded-full w-52 h-52" onClick={handleDivClick} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
                        <input type="file" accept="image/*" style={{ display: "none" }}
                            ref={(el) => {
                                if (el) fileInputRef.current = el;
                            }}
                            onChange={handleChange}
                        />
                        {isEditProfile && <div className="absolute md:w-full md:right-0 right-7 flex justify-center items-center z-50 bottom-0 h-10 w-10 md:rounded-none rounded-full bg-[#00000095] text-[#FFF]">
                            <TbCameraPlus />
                            <p className="md:block hidden px-2 py-2 leading-tight text-center font-Montserrat text-sm">change profile picture</p>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
