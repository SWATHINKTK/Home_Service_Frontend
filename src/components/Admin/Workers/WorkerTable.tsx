import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CgMoreO } from "react-icons/cg";
import { MdVerifiedUser } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import Swal from 'sweetalert2'
import { IWorker } from "../../../@types/worker";
import WorkerMoreInfoModal from "./WorkerMoreInfoModal";
import { blockWorkerAPI, fetchAllWorkerAPI, verifyWorkerAPI } from "../../../utils/api/adminAPI";
import moment from "moment";


const WorkerTable: React.FC = () => {
    const [ workers, setWorker ] = useState<IWorker[]>([]);
    const [modalData, setModalData] = useState<IWorker>();
    const [verifyStatus, setVerifyStatus] = useState(true);
    const [modalIsOpen, setIsOpen ] = useState(false);
    useEffect(() => {
        const userFetch = async () => {
            const response = await fetchAllWorkerAPI(verifyStatus);
            console.log(response.data);
            setWorker(response.data)
        }
        userFetch();

    }, [verifyStatus]);
    const heading = ["#", "Username", "Email", "Phn.No", "Service", "district", "Location",  "Status", "createdAt","More", "Action"];

    const handleMoreInfo = (index:number) => {
          setModalData(workers[index]);
          setIsOpen(true);
    }

    const handleBlockWorker = async (workerId: string, index: number) => {
         Swal.fire({
           title: "Block Worker",
           text: "Are you sure you want to block this Wprker?",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Block",
         }).then(async (result) => {
           if (result.isConfirmed) {
             const response = await blockWorkerAPI(workerId);
             if (response.success) {
               toast.success(response.message);
               setWorker((prevWorker) =>
                 prevWorker.map((worker, i) =>
                   i === index
                     ? { ...worker, _isBlocked: !worker._isBlocked }
                     : worker
                 )
               );
             }
           }
         });
    }

    const handleVerifyWorker = (workerId:string,index:number) => {
          Swal.fire({
            title: "Verify Worker",
            text: "Are you sure to confirm?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
          }).then(async (result) => {
            if (result.isConfirmed) {
              const response = await verifyWorkerAPI(workerId);
              if (response.success) {
                toast.success(response.message);
                         setWorker((prevWorker) =>
                           prevWorker.filter((_, i) => i !== index)
                         );

              }
            }
          });
    }

    return (
      <div className="mt-20 px-6">
        <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider mb-2">
          Workers
        </h1>
        <div className="flex items-center gap-2 mb-4 mx-3">
          <button
            className={`cursor-pointer w-28 border border-black py-0.5 ${
              verifyStatus ? "bg-[#06B6D4] text-white " : ""
            } relative inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] px-3`}
            onClick={() => setVerifyStatus(true)}
          >
            <MdVerifiedUser />
            Verified
          </button>

          <button
            className={`cursor-pointer w-28 py-0.5 border border-black ${
              verifyStatus ? " " : "bg-[#FB923C] text-green-950"
            } relative inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C]  px-3`}
            onClick={() => setVerifyStatus(false)}
          >
            <GoUnverified />
            Unverified
          </button>
        </div>

        <div
          className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}
        >
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
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
              {workers.map((worker, index) => {
                return (
                  <tr
                    key={worker._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-3 py-2">{index + 1}</td>
                    <td className="px-3 py-2">{worker.username}</td>
                    <td className="px-3 py-2">{worker.email}</td>
                    <td className="px-3 py-2"> {worker.phoneNumber}</td>
                    <td className="px-3 py-2">{worker.service}</td>
                    <td className="px-3 py-2">{worker.district}</td>
                    <td className="px-3 py-2">{worker.location}</td>
                    {/* <td className="px-3 py-2">{worker.qualification}</td>
                                <td className="px-3 py-2">{worker.district}</td> */}
                    <td className="px-3 py-2">
                      {worker._isBlocked && (
                        <span className="bg-red-500 font-semibold text-black rounded-md px-2">
                          Inactive
                        </span>
                      )}
                      {worker._isVerified && !worker._isBlocked && (
                        <span className="bg-green-500 font-semibold text-black rounded-md px-3.5">
                          Active
                        </span>
                      )}
                      {!worker._isVerified && (
                        <span className="bg-yellow-400 font-semibold text-black rounded-md px-3.5">
                          Unverified
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      {moment(worker.createdAt).format('lll')}
                    </td>
                    <td className="px-5 py-2">
                      <CgMoreO
                        size={20}
                        onClick={() => handleMoreInfo(index)}
                      />
                    </td>
                    <td className="px-3 py-2">
                      {worker._isVerified && (
                        <button
                          className={`${
                            worker._isBlocked
                              ? "bg-green-400"
                              : "bg-red-500 px-5"
                          } px-3 py-1 font-bold text-black rounded-md`}
                          onClick={() => handleBlockWorker(worker._id!, index)}
                        >
                          {worker._isBlocked ? "Unblock" : "Block"}
                        </button>
                      )}
                      {!worker._isVerified && (
                        <button
                          className="bg-green-400 px-3 py-1 font-bold text-black rounded-md"
                          onClick={() => handleVerifyWorker(worker._id!,index)}
                        >
                          Verify
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {modalData && (
          <WorkerMoreInfoModal
            modalIsOpen={modalIsOpen}
            closeModal={setIsOpen}
            data={modalData}
          />
        )}
      </div>
    );
};

export default WorkerTable;
