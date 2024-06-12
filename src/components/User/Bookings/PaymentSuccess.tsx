import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { MdArrowForward } from "react-icons/md";

import animationData from '../../../../public/sucessAnimation.json';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../../hooks/useQuery';

const Success: React.FC = () => {
    const animationContainer = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const query = useQuery();
    const serviceId = query.get('completed');
    console.log("{{{{{{{{{{{{{{",serviceId)

    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: animationContainer.current!,
            renderer: 'svg',
            loop: false,
            animationData: animationData,
        });

        return () => {
            animationInstance.destroy();
        };
    }, []);
    
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='relative flex flex-col justify-center items-center'>
                <div ref={animationContainer} className='h-[65vh]'></div>
                <div className='absolute md:bottom- bottom-7 flex flex-col items-center justify-center font-Montserrat'>
                    <h1 className='font-bold text-xl text-center'>{serviceId ? 'Payment Successful' : 'Your Appointment Booked Successfully'}</h1>
                    <h2 className='text-sm mt-3 animate-pulse'>Thank You For Booking ...</h2>
                </div>
            </div>
            <button className="flex items-center mt-10 transition-transform transform hover:scale-x-105 gap-2 px-4 py-2 font-sans text-xs font-bold text-center font-Montserrat border-2 text-gray-900 align-middle  rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" onClick={() => navigate(serviceId ?'/bookedServices' : '/bookingHistory')}>
                    View Bookings
                <MdArrowForward className="w-5 h-5 transition-transform  transform-gpu hover:translate-x-1"/>
            </button> 
        </div>
    )
}

export default Success
