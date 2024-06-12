import React from 'react'
import { useAppSelector } from '../../../hooks/useTypedSelector';
import moment from 'moment';
import { IService } from '../Services/ServiceTable';
import { IUser } from '../../../@types/user';
import { WorkStatus } from '../../../@types/booking';

const BookingHistory = () => {
  const { booking } = useAppSelector((state) => state.booking);
    const heading = ["#", "Booking Id", "Worker Id", "User Id","Service Name","worker Status", "Booking Date", "Payment", "Payment Status"];
  return (
    <div className="mt-20 px-6">
            <div className="flex justify-between">
                <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider mb-4">
                    Bookings
                </h1>
                

            </div>
            <div className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}>
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                    <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {heading.map((title) => (
                                <th key={title} scope="col" className="px-3 py-3">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {booking.map((data, index) => {

                            return (
                                <tr
                                    key={data._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-3 py-2">{index + 1}</td>
                                    <td className="px-3 py-2">{data.bookingId}</td>
                                    <td className="px-3 py-2">{data.workerId?.toString() || '-'}</td>
                                    <td className="px-3 py-2">{(data.userId as IUser)._id}</td>
                                    <td className="px-3 py-2">{(data.serviceId as IService).serviceName}</td>
                                    <td className="px-3 py-2">
                                        <span className={`${data.workStatus == WorkStatus.PENDING && 'bg-[#c4b84e]'} ${ data.workStatus == WorkStatus.CANCELLED && 'bg-red-500'} ${data.workStatus == WorkStatus.COMPLETED && 'bg-green-500'} bg-blue-700 font-semibold text-black rounded-md px-3.5`}>
                                            {data.workStatus}
                                        </span>
                                    </td>
                                    <td className="px-3 py-2">
                                        {moment(data.createdAt).format('lll')}
                                    </td>
                                    <td className="px-3 py-2">{data.totalAmount}</td>
                                    <td className="px-3 py-2">
                                    <span className={`${data.paymentStatus == 'Pending' && 'bg-[#c4b84e]'} ${ data.paymentStatus == 'Cancelled' && 'bg-red-500'} bg-green-500 font-semibold text-black rounded-md px-3.5`}>
                                            {data.paymentStatus}
                                        </span>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default BookingHistory
