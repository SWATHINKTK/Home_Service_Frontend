import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import moment from 'moment';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { IService } from '../Services/ServiceTable';
import { IUser } from '../../../@types/user';
import { WorkStatus } from '../../../@types/booking';
import { bookingHistoryAPI } from '../../../utils/api/adminAPI';
import { addBooking, nextPage, previousPage } from '../../../reducers/worker/bookingSlice';

const BookingHistory: React.FC = () => {
    const heading = ["#", "Booking Id", "Worker Id", "User Id", "Service Name", "worker Status", "Booking Date", "Payment", "Payment Status"];

    const { bookings, totalPages, currentPage, totalDocuments } = useAppSelector((state) => state.booking);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const response = await bookingHistoryAPI(currentPage);
            console.log(response.data)
            dispatch(addBooking(response.data));
        })()
    }, [currentPage, dispatch]);

    return (
        <div className="mt-20 px-6 font-Montserrat">
            <div className="flex justify-between">
                <h1 className="font-[700] text-[2rem] tracking-wider mb-4">
                    Bookings
                </h1>
            </div>
            <div className={`relative overflow-scroll hide-scrollbar rounded-sm `}>
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                    <thead className="text-xs text-center text-gray-700 uppercase bg-[#e0e5eb] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {heading.map((title) => (
                                <th key={title} scope="col" className="px-3 py-3">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {bookings.map((data, index) => (
                            <tr key={data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-3 py-2">{(index + 1) + ((currentPage - 1) * 4)}</td>
                                <td className="px-3 py-2">{data.bookingId}</td>
                                <td className="px-3 py-2">{data.workerId?.toString() || '-'}</td>
                                <td className="px-3 py-2">{(data.userId as IUser)._id}</td>
                                <td className="px-3 py-2">{(data.serviceId as IService).serviceName}</td>
                                <td className="px-3 py-2">
                                    <span className={`${data.workStatus == WorkStatus.PENDING && 'bg-[#c4b84e]'} ${data.workStatus == WorkStatus.CANCELLED && 'bg-red-500'} ${data.workStatus == WorkStatus.COMPLETED && 'bg-green-500'} bg-blue-700 font-semibold text-black rounded-md px-3.5`}>
                                        {data.workStatus}
                                    </span>
                                </td>
                                <td className="px-3 py-2">
                                    {moment(data.createdAt).format('lll')}
                                </td>
                                <td className="px-3 py-2">{data.totalAmount}</td>
                                <td className="px-3 py-2">
                                    <span className={`${data.paymentStatus == 'Pending' && 'bg-[#c4b84e]'} ${data.paymentStatus == 'Cancelled' && 'bg-red-500'} bg-green-500 font-semibold text-black rounded-md px-3.5`}>
                                        {data.paymentStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            {totalDocuments > 1 ?
                                <td className='bg-[#e0e5eb] text-left text-[#0202029c] font-medium' colSpan={9}>
                                    <ul className='flex justify-between items-center px-4 py-2'>
                                        <li> Showing {currentPage} to {totalPages} of {totalDocuments} results</li>
                                        <li className='flex  gap-x-4 px-3'>
                                            <button className='px-2 py-1  shadow-sm border border-[#b9b5b5c2] bg-white rounded-md flex items-center gap-x-1 disabled:bg-transparent' onClick={() => dispatch(previousPage())} disabled={currentPage == 1}>
                                                <FaArrowLeft />
                                                Previous
                                            </button>
                                            <button className='px-2 py-1 shadow-sm border border-[#b9b5b5c2] bg-white rounded-md flex items-center gap-x-2 disabled:bg-transparent' onClick={() => dispatch(nextPage())} disabled={currentPage == totalPages}>
                                                Next
                                                <FaArrowRight />
                                            </button>
                                        </li>
                                    </ul>
                                </td> 
                            : 
                                <td colSpan={9} className='bg-gradient-to-r from-rose-400 to-red-500 font-bold text-xl text-black text-center animate-bounce'> 
                                    Data Not Found
                                </td>}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookingHistory
