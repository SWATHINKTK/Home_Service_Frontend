import React from 'react'
import { ServiceCardProps } from '../../../@types/service';
import { useNavigate } from 'react-router-dom';




const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const navigate = useNavigate();
    return (
        // <div className="h-auto bg-[#F8F8F8] md:w-[15rem] w-[85%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]   rounded-md">
        <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg h-auto bg-gray-100 md:w-64 w-80 shadow-md rounded-md" onClick={() => navigate(`/service/${service._id}`)}>
            <div className="flex flex-col justify-center">
                {/* <div className="flex flex-col justify-center items-center"> */}
                <div className="flex place-items-center justify-center py-6 bg-[#e4e8e2cd] rounded-t-md">
                    {/* <div className="flex items-center justify-center h-24 w-24 rounded-[37%] bg-[#C3F4BE]"> */}
                    <div className='w-4/6 flex justify-center items-center'>
                        <img
                            className="object-contain w-[45%] h-[45%]"
                            src={service.icon}
                            alt="Service Icon"
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center pb-5'>
                    <h3 className="font-Montserrat text-[1.1rem] font-[650] mt-2">
                        {service.serviceName}
                    </h3>
                    <p className="text-center font-Montserrat mt-2 text-[9.8px] w-[78%]">
                        {service.serviceDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
