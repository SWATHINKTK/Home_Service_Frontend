import React from 'react';
import { BsHourglassSplit } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";

const BookedServices: React.FC = () => {
    return (
        <>
            {/* Heading Section */}
            <div className='sticky md:top-0 top-0 pt-12 pb-3 mx-4 font-Montserrat bg-white'>
                <h1 className="md:text-2xl font-bold text-3xl mb-1 md:text-left text-center">Booked Services</h1>
                <p className="md:block hidden font-thin text-sm pl-1 mb-6">
                    profile/ <span className="font-semibold">bookedServices</span>
                </p>
                <hr className="border-t-2 border-black opacity-15" />
            </div>

            {/* Services View Div Section */}
            <div className='grid md:grid-cols-2 mx-4'>
                <div className='bg-[#F2F2F2] md:p-4 p-3 mx-3 my-3 shadow-md rounded-md font-Montserrat '>
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
                            <h6 className='font-semibold text-xs md:mt-4 mt-1 text-[#090808d4]'>HouseName : <span className='font-medium'>Mangalassery</span></h6>
                            <h6 className='font-semibold text-xs text-green-950 mt-2'>Start Time : <span>10:00</span></h6>
                            <h6 className='font-semibold text-xs text-green-950'>End Time : <span>11:00</span></h6>
                        </div>
                    </div>
                    <div className='mt-2 px-2 py-1 bg-white rounded-md shadow-md'>
                        <p className='text-sm font-semibold text-[#242156]'>Ac cooling is not working properly</p>
                    </div>
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

                    <div className='my-3 w-full'>
                       <h4 className='text-[1.2rem] font-semibold'>Billing Details</h4>
                       <div className='flex justify-center w-full my-2'>
                            <span className='font-bold tracking-wider'>::</span>
                            <input type="text" className='mx-1 px-2  rounded-lg border-2 w-5/12 text-sm' placeholder='Description'/>
                            <span>-</span>
                            <input type="text" className='mx-1 px-2 rounded-lg border-2 w-2/12 text-sm' placeholder='Qty'/>
                            <span>-</span>
                            <input type="text" className='mx-1 px-2 rounded-lg border-2 w-3/12 text-sm' placeholder='Price' />
                       </div>
                       <button className='text-sm font-bold bg-blue-600 px-3 rounded-lg float-end md:mx-4'>Add</button>
                    </div>


                    <div className='mt-10'>
                       <div className='** border-2 py-5 rounded-md '>
                    <h5 className='mb-4 mx-7 font-bold text-center'>Summary Details</h5>
                    <div className='flex justify-between px-7 pb-2'>
                        <h6 className='text-sm font-semibold text-gray-700'>Service Amount</h6>
                        <h6 className='text-sm font-semibold text-gray-700'>₹ 300</h6>
                    </div>
                    <div className='flex justify-between px-7 pb-2'>
                        <h6 className='text-sm font-semibold text-gray-700'>Tax Amount</h6>
                        <h6 className='text-sm font-semibold text-gray-700'>₹ 28</h6>
                    </div>
                    <div className='flex justify-between px-7 pb-2'>
                        <h6 className='text-sm font-semibold text-gray-700'>Visiting Amount</h6>
                        <h6 className='text-sm font-semibold text-gray-700'>₹ 40</h6>
                    </div>
                    <div className='flex justify-between px-7 pb-2'>
                        <h6 className='text-sm font-semibold text-gray-700'>Extra Amount</h6>
                        <h6 className='text-sm font-semibold text-gray-700'>₹ 40</h6>
                    </div>
                    <hr className="border-t-2 border-dotted border-gray-500 mx-auto w-[90%] mt-2 " />
                    <div className='flex justify-between px-7 '>
                        <h6 className='text-sm font-semibold text-gray-700'>Total Amount</h6>
                        <h6 className='text-sm font-semibold text-gray-700'>368</h6>
                    </div>
                    
                    <div className='flex justify-center items-center px-5 mt-5 '>
                        <button className='bg-[#1c1e5f] w-full  rounded-md py-1  text-white' >Completed</button>
                    </div>
                </div>

                    </div>
                </div>
                


                <div className='bg-[#F2F2F2] md:p-4 p-3 mx-3 my-3 shadow-md rounded-md font-Montserrat '>
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
                            <h6 className='font-semibold text-xs md:mt-4 mt-1 text-[#090808d4]'>HouseName : <span className='font-medium'>Mangalassery</span></h6>
                            <h6 className='font-semibold text-xs text-green-950 mt-2'>Start Time : <span>10:00</span></h6>
                            <h6 className='font-semibold text-xs text-green-950'>End Time : <span>11:00</span></h6>
                        </div>
                    </div>
                    <div className='mt-2 px-2 py-1 bg-white rounded-md shadow-md'>
                        <p className='text-sm font-semibold text-[#242156]'>Ac cooling is not working properly</p>
                    </div>
                    <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3'>Cancel</button>
                </div>


                <div className='bg-[#F2F2F2] md:p-4 p-3 mx-3 my-3 shadow-md rounded-md font-Montserrat'>
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
                            <h6 className='font-semibold text-xs md:mt-4 mt-1 text-[#090808d4]'>HouseName : <span className='font-medium'>Mangalassery</span></h6>
                            <h6 className='font-semibold text-xs text-green-950 mt-2'>Start Time : <span>10:00</span></h6>
                            <h6 className='font-semibold text-xs text-green-950'>End Time : <span>11:00</span></h6>
                        </div>
                    </div>
                    <div className='mt-2 px-2 py-1 bg-white rounded-md shadow-md'>
                        <p className='text-sm font-semibold text-[#242156]'>Ac cooling is not working properly</p>
                    </div>
                    <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3'>Cancel</button>
                </div>

                <div className='bg-[#F2F2F2] md:p-4 p-3 mx-3 my-3 shadow-md rounded-md font-Montserrat'>
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
                            <h6 className='font-semibold text-xs md:mt-4 mt-1 text-[#090808d4]'>HouseName : <span className='font-medium'>Mangalassery</span></h6>
                            <h6 className='font-semibold text-xs text-green-950 mt-2'>Start Time : <span>10:00</span></h6>
                            <h6 className='font-semibold text-xs text-green-950'>End Time : <span>11:00</span></h6>
                        </div>
                    </div>
                    <div className='mt-2 px-2 py-1 bg-white rounded-md shadow-md'>
                        <p className='text-sm font-semibold text-[#242156]'>Ac cooling is not working properly</p>
                    </div>
                    <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3'>Cancel</button>
                </div>
            </div>

        </>
    )
}

export default BookedServices
