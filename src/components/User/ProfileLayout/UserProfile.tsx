import React, { useState } from 'react';
import { RiUser6Line } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IUser } from '../../../@types/user';



const UserProfile:React.FC = () => {
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [ userData, setUserData ] = useState<IUser>({});

     const profile = [
      { key: 'firstname', fieldName: "Firstname", value: userData.firstname, icon: RiUser6Line },
      { key: 'lastname', fieldName: "Lastname", value: userData.lastname, icon: RiUser6Line },
      { key: 'email', fieldName: "Email", value: userData.email, icon: MdAlternateEmail, disabled:true },
      { key: 'phoneNumber', fieldName: "PhoneNumber", value: userData.email, icon: FiPhone },
      { key: 'district', fieldName: "District", value: userData.district, icon: IoLocationOutline },
    ];
   const handleChange = (value:string, key:string) => {
       setUserData((prev) => {
        return {
          ...prev, 
          [key]: value,
        };
       })

   }
  return (
    <div className="about-section">
      <h1 className="text-3xl mb-1">Manage Profile</h1>
      <p className="font-thin text-sm pl-1 mb-6">
        user/ <span className="font-semibold">Manage profile</span>
      </p>
      <hr className="border-t-2 border-black opacity-15" />

      <div className="flex justify-between">
        <div className="head font-sans  text-bold pl-4 mt-5 mb-4">
          About Me{" "}
        </div>
        <div className="but pr-5 pt-5">
          {!isEditProfile && (
            <button
              onClick={() => setIsEditProfile(true)}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-10 bg-white rounded-lg shadow-md p-6">
        <div className=" text-md w-10/12 font-light  ">
          <div className="grid grid-cols-2 gap-x-7 gap-y-6 grid-rows-3">
            {profile.map((field, index) => (
              <div
                key={index}
                className=" bg-[#F2F2F2]  p-3 px-5 rounded-xl flex items-center"
              >
                <div className="bg-white h-12 w-12 rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex justify-center items-center ">
                  {React.createElement(field.icon, { size: "25" })}
                </div>
                <div className="mx-2">
                  <h5 className="text-sm font-semibold">{field.fieldName}</h5>
                  <input
                    type="text"
                    className={`text-[1rem] ${
                      isEditProfile && "border-b-2 border-black"
                    }  outline-none bg-transparent`}
                    value={field.value}
                    style={{ width: `${field.value?.length * 13}px` }}
                    disabled={!isEditProfile || field.disabled}
                    onChange={(e) => handleChange(field.key,e.target.value )}
                  />
                </div>
              </div>
            ))}
          </div>
          {isEditProfile && (
            <div className="flex gap-2 mt-4">
              <button className="text-[1rem] font-semibold px-5 p-0  rounded-md bg-[#0D9276]">
                Save
              </button>
              <button
                className="text-[1rem] font-semibold px-5 p-0  rounded-md bg-[#994a44]"
                onClick={() => setIsEditProfile(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className=" min-w-52  ">
          <img
            className="h-52 w-52"
            src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
