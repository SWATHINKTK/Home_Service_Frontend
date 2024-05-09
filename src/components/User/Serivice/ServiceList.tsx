import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { serviceListAPI } from '../../../utils/api/userAPI';
import { IService } from '../../../@types/service';

const ServiceList: React.FC = () => {
    const [services, setServices] = useState<IService[]>([]);

    const fetchServices = async () => {
        const response = await serviceListAPI();
        setServices(response.data)
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className="mx-auto max-w-6xl my-16">
            <div className='flex flex-col items-center'>
                <h1 className='font-Montserrat font-semibold tracking-wide text-4xl'>Services</h1>
                <div className='w-11/12 my-3'>
                    <p className='text-center font-Montserrat text-sm text-[#2B2B2B]'>Seamlessly navigate through our services and effortlessly book with our user-friendly platform, ensuring a stress-free experience from start to finish.Kindly familiarize yourself with our terms and conditions to ensure a seamless service experience.</p>
                </div>
            </div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-y-9 mt-16'>
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default ServiceList
