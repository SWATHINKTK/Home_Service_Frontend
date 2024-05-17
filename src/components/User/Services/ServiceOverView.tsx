import React from 'react';
import { RiUserStarLine } from "react-icons/ri";
import { PiHandshakeBold } from "react-icons/pi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";

const ServiceOverView: React.FC = () => {
    const services = [
        {
            text: 'Trained Professionals',
            icon: RiUserStarLine
        },
        {
            text: 'Reliable Services',
            icon: PiHandshakeBold
        },
        {
            text: 'Instant Service Booking',
            icon: MdOutlineMobileFriendly
        },
        {
            text: 'High Quality Services',
            icon: RiVerifiedBadgeLine
        }
    ];

    return (
        <section className='max-w-5xl mx-auto mb-10 pt-5 '>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-y-4 md:gap-5 place-items-center font-Montserrat'>
                {services.map((service, index) => (
                    <div key={index} className='flex flex-col justify-center items-center md:h-44 h-40 md:w-44 w-40 bg-[#F7F7F7] rounded-md'>
                        {React.createElement(service.icon, { className: 'md:h-20 h-16 md:w-20 w-16', color: '#1d1947' })}
                        <h2 className='mt-2 font-semibold text-[#1d1947] leading-tight text-center text-lg px-3'>{service.text}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceOverView
