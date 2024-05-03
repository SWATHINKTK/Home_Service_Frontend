import React from 'react'

const ServiceTable: React.FC = () => {
    const heading = [
        "#",
        "Firstname",
        "Lastname",
        "Email",
        "Phn.No",
        "district",
        "Block",
        "createdAt",
        "Action",
    ];
    return (
      <div className="mt-20 w-[82%]">
        <div className="flex justify-between mb-3">
          <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider ">
            Services
          </h1>
          <button className=" bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Add Service
          </button>
        </div>
        <div
          className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}
        >
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {heading.map((title) => (
                  <th scope="col" className="px-3 py-3">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
}

export default ServiceTable
