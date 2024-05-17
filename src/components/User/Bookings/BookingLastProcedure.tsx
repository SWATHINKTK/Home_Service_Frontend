import React from 'react'
import { useNavigate } from 'react-router-dom';
import PaymentSummary from './PaymentSummary';

const BookingLastProcedure: React.FC = () => {
    const navigate = useNavigate();
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
        }
        
    ] 
    return (
        <>
            <section className='max-w-5xl mx-auto my-6 font-Montserrat px-3'>
                <h1 className=' font-bold tracking-wide text-4xl text-center'>Booking</h1>
                <p className='text-center my-5 md:text-sm text-xs   text-[#414141d8]'>Select and book our free available slots; if a worker is available at your chosen time, they will be assigned to you. If not, your request will be automatically canceled after one hour.</p>
            </section>

            <section className='max-w-6xl mx-auto my-16 flex md:flex-row flex-col justify-center gap-6 font-Montserrat'>
                <div className='md:w-8/12 px-4'>
                    <form >
                        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 ">
                            <div>
                                <label htmlFor="buildName" className="block mb-1 text-sm font-semibold text-gray-900">Build / House Name <span className='text-red-600'>*</span></label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="build / house" />
                            </div>
                            <div>
                                <label htmlFor="date" className="block mb-1 text-sm font-semibold text-gray-900">Date <span className='text-red-600'>*</span></label>
                                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="build / house" />
                            </div>
                            <div>
                                <label htmlFor="startTime" className="block mb-1 text-sm font-semibold text-gray-900">Start Time <span className='text-red-600'>*</span></label>
                                <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="endTime" className="block mb-1 text-sm font-semibold text-gray-900">End Time <span className='text-red-600'>*</span></label>
                                <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            {/* <div>
                                <label htmlFor="landmark" className="block mb-1 text-sm font-semibold text-gray-900">Landmark</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='landmark' />
                            </div>
                            <div>
                                <label htmlFor="alternateNumber" className="block mb-1 text-sm font-semibold text-gray-900">Alternate Number</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="alternate number" />
                            </div> */}
                        </div>

                        <label htmlFor="message" className="block mt-4 mb-2 text-sm font-semibold text-gray-900">Description</label>
                        <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your issue here..." />

                    </form>

                </div>
                <svg className='w-10 h-[21rem] md:block hidden' viewBox="0 0 12 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667ZM6 395.667C3.05448 395.667 0.666667 398.054 0.666667 401C0.666667 403.946 3.05448 406.333 6 406.333C8.94552 406.333 11.3333 403.946 11.3333 401C11.3333 398.054 8.94552 395.667 6 395.667ZM5 6L5 401H7L7 6H5Z" fill="#CABFBF" />
                </svg>
                <div className='md:w-4/12 mx-4 border-2 py-5 rounded-md '>
                        <PaymentSummary payments={payments} />
                        <div className="p-4 my-3 mx-6 text-sm text-blue-800 rounded-lg bg-blue-50 " role="alert">
                            <span className="font-medium"></span>confirmation of booking pay <span className='font-bold'>₹ 60</span> rupees advance.
                        </div>
                    <div className='flex justify-center items-center px-5 my-2 '>
                        <button className='bg-[#1c1e5f] w-full  rounded-md py-1  text-white' onClick={() =>  navigate('/bookedServices')}>Book Service</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingLastProcedure;
