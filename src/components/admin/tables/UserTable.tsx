import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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


    const handleBlockUser = async (userId: string | undefined, index: number) => {
        console.log(userId, index);
        if (!userId) {
            toast.error("Something went wrong.");
            return;
        }

        try {
            const response = await axios.patch(`/api/admin/${userId}/block`);
            if (response.status == 200) {
                setUsers((prevUsers) => prevUsers.map((user, i) => (i === index ? { ...user, _isBlocked: !user._isBlocked } : user)));

            } else {
                throw new Error('Server Error');
            }

        } catch (error) {
            toast.error("Server error")
        }
    }

    return (
        <div className="mt-20 ">
            <div className="flex">
                <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider mb-4">
                    Users
                </h1>
            </div>
            <div className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}>
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
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
                                            onClick={() => handleBlockUser(user._id, index)}
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
