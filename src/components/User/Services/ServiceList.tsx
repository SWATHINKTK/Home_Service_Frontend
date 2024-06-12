import React, { useCallback, useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


import ServiceCard from './ServiceCard'
import { serviceListAPI } from '../../../utils/api/userAPI';
import { IService } from '../../../@types/service';

const ServiceList: React.FC = () => {
    const [services, setServices] = useState<IService[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');



    const fetchServices = useCallback(async () => {
        setLoading(true);
        const response = await serviceListAPI(pageNumber, search);
        setLoading(false);
        pageNumber == 1 ? setServices(response.data) : setServices((prev) => [...prev, ...response.data])
    }, [pageNumber, search])

    useEffect(() => {
        fetchServices();
    }, [pageNumber, fetchServices]);

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (searchTerm != null) {
                setSearch(searchTerm);
                setPageNumber(1)
            }
        }, 600);
        return () => clearTimeout(debounce)
    }, [searchTerm])

    return (
        <div className="mx-auto max-w-6xl my-16">
            <div className='flex flex-col items-center'>
                <h1 className='font-Montserrat font-semibold tracking-wide text-4xl'>Services</h1>
                <div className='w-11/12 my-3'>
                    <p className='text-center font-Montserrat text-sm text-[#2B2B2B]'>Seamlessly navigate through our services and effortlessly book with our user-friendly platform, ensuring a stress-free experience from start to finish.Kindly familiarize yourself with our terms and conditions to ensure a seamless service experience.</p>
                </div>
                <div className="md:w-4/12 mt-5 mx-auto">
                    <div className="relative w-full min-w-[300px] h-10">
                        <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-4 right-6 -translate-y-2/4">
                            <CiSearch size={27} />
                        </div>
                        <input
                            className="peer shadow-md px-5 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 text-sm py-2.5 rounded-full !pr-9 border-blue-gray-200"
                            placeholder=" "
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <label className="absolute left-3 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:text-blue-gray-500 peer-focus:-top-2 peer-focus:text-gray-900 peer-focus:text-[11px] text-sm px-1 transition-all pointer-events-none bg-white">
                            Search Services
                        </label>
                    </div>
                </div>
            </div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-y-9 mt-16 place-items-center'>
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            {services.length == 0 && !loading ?
                <div className=''>
                    <img className=' mx-auto' src="/public/notfound.png" alt="" />
                    <h3 className='text-center font-bold font-Montserrat tracking-widest mt-2 text-[#150f3e]'>No Data Found</h3>
                </div>
                :
                <div className="flex justify-center mt-6">
                    <button
                        className="flex items-center mt-3 transition-transform transform hover:scale-105 gap-2 px-5 py-2 font-sans text-xs font-bold text-center font-Montserrat border-2 text-gray-900 align-middle  rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button"
                        onClick={() => setPageNumber(pageNumber + 1)}
                        disabled={loading}
                    >
                        {loading ? <FaSpinner className="animate-spin" /> : <> More <IoIosArrowDown /></>}

                    </button>
                </div>
            }
        </div>
    )
}

export default ServiceList
