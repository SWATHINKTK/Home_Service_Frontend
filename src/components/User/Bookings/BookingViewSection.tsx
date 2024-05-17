import React from 'react';
import { BsHourglassSplit } from "react-icons/bs";


const BookingViewSection: React.FC = () => {
  return (
    <section>
        <div className='flex justify-between items-center text-[#252525e4] md:text-sm text-xs'>
                        <h6 className='font-semibold'>Booking Id : <span>1010101</span></h6>
                        <h6 className='font-medium'>Date : <span>12/07/2025</span></h6>
                    </div>
                    <hr className=' my-2 border-[#b8b8b8]' />
                    <div className='flex'>
                        <img src="/public/AC-Repair.webp" className='w-[7rem] h-[7rem] rounded-lg object-cover' alt="" />
                        <div className='w-full px-2 md:py-1.5'>
                            <div className='text-[#141833] md:flex justify-between items-center'>
                                <h3 className='font-semibold md:text-lg text-[0.9rem]'>Air Conditioner Services</h3>
                                <div className='flex items-center text-red-800'>
                                    <BsHourglassSplit className='w-4' />
                                    <h6 className='md:text-[0.9rem] text-sm font-semibold mx-1'>Pending</h6>
                                </div>
                            </div>
                            <h6 className='font-semibold text-xs md:mt-4 mt-1 text-[#090808d4]'>HouseName : <span className='font-medium'>Mangallassery</span></h6>
                            <h6 className='font-semibold text-xs text-green-950 mt-2'>Start Time : <span>10:00</span></h6>
                            <h6 className='font-semibold text-xs text-green-950'>End Time : <span>11:00</span></h6>
                        </div>
                    </div>
                    <div className='mt-2 px-2 py-1 bg-white rounded-md shadow-md'>
                        <p className='text-sm font-semibold text-[#242156]'>Ac cooling is not working properly</p>
                    </div>
    </section>
  )
}

export default BookingViewSection
