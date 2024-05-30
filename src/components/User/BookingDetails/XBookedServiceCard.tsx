import React, { useState } from 'react';
import { BsHourglassSplit } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsChatText } from "react-icons/bs";



import { IBooking } from '../../../@types/booking';
import BillingDetails from './BillingDetails';
import { cancelBookingUserAPI } from '../../../utils/api/userAPI';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';




interface BookingViewSectionProps {
    service: IBooking
}



const BookingCard: React.FC<BookingViewSectionProps> = ({ service }) => {
    const [isViewMore, setIsViewMore] = useState(false);

    const handleCancelBooking = async(bookingId:string) =>{
        const updateStatus = {
            bookingId,
            status:'Cancelled'
        }
        Swal.fire({
            title: "Cancel Booking",
            text: "Are you sure you want to cancel this booking?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
          }).then(async (result) => {
            if (result.isConfirmed) {
                await cancelBookingUserAPI(updateStatus);
                toast.success(`Booking has been successfully canceled`);
            }
          });
       
    } 

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

            {service.workStatus !== 'Completed' && service.workStatus !== 'Cancelled' ?
                // {/* Chat and Cancel Button */}
                (<div className='flex justify-between'>
                    <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3' onClick={() => handleCancelBooking(service._id!)} >Cancel</button>
                    {service.workStatus != 'Pending' && service.workStatus !== 'Completed' && (
                        <button className='bg-white px-4 py-1 rounded-md mt-3 flex items-center'>
                            <BsChatText />
                            <h5 className='text-sm font-bold mx-1'>Chat</h5>
                        </button>
                    )}
                </div>)
                :
                // {/* Work Completion View Data */}
                (
                    <div className='flex justify-center'>
                         <h6 className={` md:text-[1rem] text-sm font-semibold mx-1 ${service.workStatus == 'Cancelled' ? 'text-red-500' : 'text-green-900'}`}>{service.workStatus}</h6>
                    </div>
                // <div className='mt-3'>
                //     <div className='flex justify-between w-full'>
                //         <h5 className='text-sm font-semibold'>Payment Status</h5>
                //         <h5 className='text-sm font-semibold'>Work Status</h5>
                //     </div>
                //     <div className='flex justify-between w-full'>
                //         <div className='flex items-center text-red-800'>
                //             <BsHourglassSplit className='w-4' />
                //             <h6 className='md:text-[0.9rem] text-sm font-semibold mx-1'>Pending</h6>
                //         </div>
                //         <div className='flex items-center text-red-800'>
                //             <BsHourglassSplit className='w-4' />
                //             <h6 className='md:text-[0.9rem] text-sm font-semibold mx-1'>Pending</h6>
                //         </div>
                //     </div>
                // </div>
            )}

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
