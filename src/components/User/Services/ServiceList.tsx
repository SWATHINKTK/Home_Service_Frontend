import React, { useCallback, useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

import ServiceCard from './ServiceCard'
import { serviceListAPI } from '../../../utils/api/userAPI';
import { IService } from '../../../@types/service';

const ServiceList: React.FC = () => {
    const [services, setServices] = useState<IService[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchServices = useCallback(async () => {
        setLoading(true);
        const response = await serviceListAPI(pageNumber);
        setLoading(false);
        pageNumber == 1 ? setServices(response.data) : setServices((prev) => [...prev, ...response.data])
    }, [pageNumber])

    useEffect(() => {
        fetchServices();
    }, [pageNumber, fetchServices]);

    return (
        <div className="mx-auto max-w-6xl my-16">
            <div className='flex flex-col items-center'>
                <h1 className='font-Montserrat font-semibold tracking-wide text-4xl'>Services</h1>
                <div className='w-11/12 my-3'>
                    <p className='text-center font-Montserrat text-sm text-[#2B2B2B]'>Seamlessly navigate through our services and effortlessly book with our user-friendly platform, ensuring a stress-free experience from start to finish.Kindly familiarize yourself with our terms and conditions to ensure a seamless service experience.</p>
                </div>
            </div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-y-9 mt-16 place-items-center'>
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
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
        </div>
    )
}

export default ServiceList
