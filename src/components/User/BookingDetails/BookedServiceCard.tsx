import React, { useState } from 'react';
import { BsHourglassSplit } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";



import { IBooking } from '../../../@types/booking';
import BillingDetails from './BillingDetails';




interface BookingViewSectionProps {
    service: IBooking
}



const BookingCard: React.FC<BookingViewSectionProps> = ({ service }) => {
    const [isViewMore, setIsViewMore] = useState(false);

     

    return (
        <section>
            {/* Booking Id Top Section */}
            <div className='flex justify-between items-center text-[#252525e4] md:text-sm text-xs'>
                <h6 className='font-semibold'>Booking Id : <span>{service._id}</span></h6>
                <h6 className='font-medium'>Date : <span>{service.date}</span></h6>
            </div>
            <hr className=' my-2 border-[#b8b8b8]' />

            {/* Booking Information View Section */}
            <div className='flex'>
                <img src={service.serviceInfo.image} className='w-[7rem] h-[7rem] rounded-lg object-cover' alt="" />
                <div className='w-full px-2 md:py-1.5'>
                    <div className='text-[#141833] md:flex justify-between items-center'>
                        <h3 className='font-semibold md:text-lg text-[0.9rem]'>{service.serviceInfo.serviceName}</h3>
                        <div className='flex items-center text-red-800'>
                            <BsHourglassSplit className='w-4' />
                            <h6 className='md:text-[0.9rem] text-sm font-semibold mx-1'>Pending</h6>
                        </div>
                    </div>
                    <h6 className='font-semibold text-xs md:mt-4 mt-1 text-[#090808d4]'>Build/House name: <span className='font-medium'>{service.buildingName}</span></h6>
                    <h6 className='font-semibold text-xs text-green-950 mt-2'>Start Time : <span>{service.startTime}</span></h6>
                    <h6 className='font-semibold text-xs text-green-950'>End Time : <span>{service.endTime}</span></h6>
                </div>
            </div>
            <div className='mt-2 px-2 py-1 bg-white rounded-md shadow-md'>
                <p className='text-sm font-semibold text-[#242156]'>{service.description}</p>
            </div>


            {service.workStatus == 'Completed' && (
                <>
                    {/* View More Details of Booking */}
                    <div className="flex justify-center m">
                        <button className="flex items-center mt-3 transition-transform transform hover:scale-105 gap-2 font-Montserrat text-xs font-bold text-center  text-gray-900  select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
                            onClick={() => setIsViewMore(!isViewMore)}
                        >
                            View More <IoIosArrowDown />
                        </button>
                    </div>
                    <BillingDetails isViewMore={isViewMore} />
                </>
            )}

        </section>
    )
}

export default BookingCard;
