import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MdModeEditOutline } from "react-icons/md";
import { IoSave } from "react-icons/io5";
import { blockServiceAPI, editServiceAPI } from "../../../utils/api/adminAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export interface IService {
  _id?: string;
  serviceName: string;
  minimumAmount: number;
  hourlyAmount: number;
  serviceDescription: string;
  icon?: string;
  image?: string;
  _isBlocked?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ServiceTable: React.FC = () => {
  const [services, setServices] = useState<IService[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<IService | null>(null);
  const navigate = useNavigate();
  const heading = [
    "#",
    "Icon",
    "Name",
    `Amount`,
    "Per Hour",
    "Service Description",
    "image",
    "Block",
    "createdAt",
    "",
    "",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/admin/service");
        setServices(response.data.data);
      } catch (error) {
        if (error instanceof AxiosError)
          toast.error(error.response?.data.errors[0].message);
      }
    };
    fetchServices();
  }, []);

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditData(services[index])
  };

  const handleSaveClick = async(index:number) => {

    const response = await editServiceAPI(editData!)
    if(response){
      toast.success(response.message)
      const newServices = [...services];
      newServices[index] = editData!;
      setServices(newServices);
    }
    setEditingIndex(null);
  };

  const handleBlockService = (serviceId:string, index:number) => {
    Swal.fire({
      title: "Block Service",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Block",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await blockServiceAPI(serviceId);
        if (response.success) {
          toast.success(response.message);
          setServices((prevService) =>
            prevService.map((service, i) =>
              i === index
                ? { ...service, _isBlocked: !service._isBlocked }
                : service
            )
          );
        }
      }
    });
  };

  return (
    <div className="mt-20 w-[82%]">
      <div className="flex justify-between mb-3">
        <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider ">
          Services
        </h1>
        <button
          className=" bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          onClick={() => navigate("/admin/addService")}
        >
          <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Add Service
        </button>
      </div>
      <div className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}>
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {heading.map((title, index) => (
                <th scope="col" key={title + index} className="px-3 py-3">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={service._id || index}
                className={`${
                  editingIndex === index ? "bg-[#d8dbe8]" : "bg-white"
                } border-b text-center dark:bg-gray-800 dark:border-gray-700`}
              >
                <td className="px-3 py-2 font-bold text-black">{index + 1}</td>
                <th className="mx-3 my-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={service.icon}
                    alt="Jese image"
                  />
                </th>
                <td className="px-4">
                  {editingIndex === index ? (
                    <input
                      className="px-1 py-2 border-2 bg-white rounded-md"
                      type="text"
                      value={editData?.serviceName || ""}
                      onChange={(e) => {
                        setEditData({
                          ...editData!,
                          serviceName: e.target.value,
                        });
                      }}
                      style={{ width: "calc(100% + 1rem)" }}
                    />
                  ) : (
                    service.serviceName
                  )}
                </td>
                <td className="px-3 py-2">
                  {editingIndex === index ? (
                    <input
                      className="px-1 py-2 border-2 bg-white rounded-md"
                      type="text"
                      value={editData?.minimumAmount || ""}
                      onChange={(e) => {
                        setEditData({
                          ...editData!,
                          minimumAmount: parseFloat(e.target.value),
                        });
                      }}
                      style={{ width: "calc(100% + 1rem)" }}
                    />
                  ) : (
                    service.minimumAmount
                  )}
                </td>
                <td className="px-3 py-2">
                  {editingIndex === index ? (
                    <input
                      className="px-1 py-2 border-2 bg-white rounded-md"
                      type="text"
                      value={editData?.hourlyAmount || ""}
                      onChange={(e) => {
                        setEditData({
                          ...editData!,
                          hourlyAmount: parseFloat(e.target.value),
                        });
                      }}
                      style={{ width: "calc(100% + 1rem)" }}
                    />
                  ) : (
                    service.hourlyAmount
                  )}
                </td>
                <td className="px-3 py-2 w-5/12 text-justify">
                  {editingIndex === index ? (
                    <textarea
                      className="w-full h-20 px-3 py-2 border-2 bg-white rounded-md   resize-none"
                      value={editData?.serviceDescription || ""}
                      onChange={(e) => {
                        setEditData({
                          ...editData!,
                          serviceDescription: e.target.value,
                        });
                      }}
                      style={{
                        scrollbarWidth: "thin",
                        msOverflowStyle: "none",
                      }}
                    />
                  ) : (
                    service.serviceDescription
                  )}
                </td>
                <td className="">
                  <img
                    src={service.image}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-3 py-2">
                  {service._isBlocked ? (
                    <span className="bg-red-500 font-semibold text-black rounded-md px-2">
                      Inactive
                    </span>
                  ) : (
                    <span className="bg-green-500 font-semibold text-black rounded-md px-3.5">
                      Active
                    </span>
                  )}
                </td>
                <td className="px-3 py-2">2024-05-04T17:52:38.183Z</td>
                <td>
                  {editingIndex === index ? (
                    <button
                      onClick={() => handleSaveClick(editingIndex)}
                      className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-green-200 rounded-full focus:shadow-outline hover:bg-gray-200"
                    >
                      <IoSave size={17} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(index)}
                      className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-blue-200 rounded-full focus:shadow-outline hover:bg-gray-200"
                    >
                      <MdModeEditOutline size={18} />
                    </button>
                  )}
                </td>
                <td className="px-3">
                  <button
                    className={`${
                      service._isBlocked ? "bg-green-400" : "bg-red-500 px-5"
                    } px-3 py-1 font-bold text-black rounded-md`}
                    onClick={() => handleBlockService(service._id!, index)}
                  >
                    {service._isBlocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTable;
