import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import { blockUserAPI } from "../../../utils/api/userAPI";

interface UserData {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    district: string;
    password: string;
    _isBlocked: boolean;
    createdAt: Date;
    updatedAt?: Date;
}


const UserTable: React.FC = () => {
    const [users, setUsers] = useState<UserData[]>([]);
    useEffect(() => {
        const userFetch = async () => {
            const response = await axios.get("/api/admin/users");
            console.log(response.data);
            setUsers(response.data.data)
        }
        userFetch();

    }, []);
    const heading = ["#", "Firstname", "Lastname", "Email", "Phn.No", "district", "Status", "createdAt", "Action"];


    const handleBlockUser = async (userId: string, index: number) => {
         Swal.fire({
           title: "Block User",
           text: "Are you sure you want to block this user?",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Block",
         }).then(async (result) => {
           if (result.isConfirmed) {
             const response = await blockUserAPI(userId);
             if (response.success) {
               toast.success(response.message);
               setUsers((prevUsers) =>
                 prevUsers.map((user, i) =>
                   i === index
                     ? { ...user, _isBlocked: !user._isBlocked }
                     : user
                 )
               );
             }
           }
         });
    }

    return (
        <div className="mt-20 ">
            <div className="flex">
                <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider mb-4">
                    Users
                </h1>
            </div>
            <div className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}>
                <table className="w-[80%]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {heading.map((title) => (
                                <th key={title} scope="col" className="px-3 py-3">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {

                            return (
                                <tr
                                    key={user._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-3 py-2">{index + 1}</td>
                                    <td className="px-3 py-2">{user.firstname}</td>
                                    <td className="px-3 py-2">{user.lastname}</td>
                                    <td className="px-3 py-2">{user.email}</td>
                                    <td className="px-3 py-2">{user.phoneNumber}</td>
                                    <td className="px-3 py-2">{user.district}</td>
                                    <td className="px-3 py-2">
                                        {user._isBlocked ? (
                                            <span className="bg-red-500 font-semibold text-black rounded-md px-2">
                                                Inactive
                                            </span>
                                        ) : (
                                            <span className="bg-green-500 font-semibold text-black rounded-md px-3.5">
                                                Active
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-3 py-2">
                                        {user.createdAt.toLocaleString()}
                                    </td>
                                    <td className="px-3 py-2">
                                        <button
                                            className={`${user._isBlocked ? "bg-green-400" : "bg-red-500 px-5"
                                                } px-3 py-1 font-bold text-black rounded-md`}
                                            onClick={() => handleBlockUser(user._id!, index)}
                                        >
                                            {user._isBlocked ? "Unblock" : "Block"}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
