import React, { useState } from 'react';
import { BsChatText } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import BookingViewSection from './BookedServiceData';
import PaymentSummary from './PaymentSummary';
import './bookedServices.css'

const BookedServices: React.FC = () => {
    const [ isViewMore, setIsViewMore ] = useState(false);
    const payments = [
        {
            description: 'Service Amount',
            amount: 300
        },
        {
            description: 'Tax Amount',
            amount: 30
        },
        {
            description: 'Visiting Amount',
            amount: 300
        },
        {
            description: 'Extra Amount',
            amount: 300
        }
    ]
    return (
        <>
            {/* Services View Div Section */}
            <section className='grid md:grid-cols-2 mx-4'>
                <div className='bg-[#F2F2F2] md:p-4 p-3 mx-3 my-3 shadow-md rounded-md font-Montserrat '>
                    <BookingViewSection />
                    <div className='flex justify-between'>
                        <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3'>Cancel</button>
                        <button className='bg-white px-4 py-1 rounded-md mt-3 flex items-center'>
                            <BsChatText />
                            <h5 className='text-sm font-bold mx-1'>Chat</h5>
                        </button>
                    </div>
                    {/* <div className='mt-3'>
                        <div className='flex justify-between w-full'>
                            <h5 className='text-sm font-semibold'>Payment Status</h5>
                            <h5 className='text-sm font-semibold'>Work Status</h5>
                        </div>
                        <div className='flex justify-between w-full'>
                        <div className='flex items-center text-red-800'>
                                    <BsHourglassSplit className='w-4' />
                                    <h6 className='md:text-[0.9rem] text-sm font-semibold mx-1'>Pending</h6>
                                </div>
                                <div className='flex items-center text-red-800'>
                                    <BsHourglassSplit className='w-4' />
                                    <h6 className='md:text-[0.9rem] text-sm font-semibold mx-1'>Pending</h6>
                                </div>
                        </div>
                    </div> */}

                    <div className="flex justify-center m">
                        <button className="flex items-center mt-3 transition-transform transform hover:scale-105 gap-2 font-Montserrat text-xs font-bold text-center  text-gray-900  select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
                        onClick={() => setIsViewMore(!isViewMore) }
                        >
                            View More <IoIosArrowDown />
                        </button>
                    </div>
                    <div className={`transition-height ${isViewMore ? 'expanded' : 'collapsed'}`}>
                    { isViewMore && (
                    <>
                    <div className='my-3 w-full'>
                        <h4 className='text-[1.2rem] font-semibold'>Billing Details</h4>
                        <div className='flex justify-center w-full my-2'>
                            <span className='font-bold tracking-wider'>::</span>
                            <input type="text" className='mx-1 px-2  rounded-lg border-2 w-5/12 text-sm' placeholder='Description' />
                            <span>-</span>
                            <input type="number" className='mx-1 px-2 rounded-lg border-2 w-2/12 text-sm' placeholder='Qty' min={1} />
                            <span>-</span>
                            <input type="text" className='mx-1 px-2 rounded-lg border-2 w-3/12 text-sm' placeholder='Price' />
                        </div>
                        <button className='text-sm font-bold bg-blue-600 px-3 rounded-lg float-end md:mx-4'>Add</button>
                    </div>


                    <div className='mt-10'>
                        <div className='** border-2 py-5 rounded-md '>
                            <PaymentSummary payments={payments} />
                            <div className='flex justify-center items-center px-5 mt-5 '>
                                <button className='bg-[#1c1e5f] w-full  rounded-md py-1  text-white' >Completed</button>
                            </div>
                        </div>

                    </div>
                    </>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookedServices
