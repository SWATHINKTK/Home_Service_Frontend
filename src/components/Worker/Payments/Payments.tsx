import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { workHistoryAPI } from '../../../utils/api/workerAPI';
import { addBooking } from '../../../reducers/worker/bookingSlice';

const Payments:React.FC  = () => {
    const { bookings } = useAppSelector((state) => state.booking)
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            const response = await workHistoryAPI(1);
            console.log(response)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);

    const totalAmount = useMemo(() => {
        return bookings.reduce((total, booking) => total + booking.totalAmount, 0);
    }, [bookings]);
    return (
        <>
            <div className='sticky top-0 pb-3 px-4 md:pt-0 pt-4 font-Montserrat bg-white'>
                <h1 className="md:text-2xl font-bold text-3xl md:mb-1 mb-3 md:text-left text-center">Payment Information</h1>
                <p className="md:block hidden font-thin text-sm pl-1 mb-6">
                    profile/ <span className="font-semibold">Payment Information</span>
                </p>
                <hr className="border-t-2 border-black opacity-15" />
            </div>
            <div className='w-full py-2 border-2 drop-shadow-lg rounded-lg px-5 '>
                <h1 className='font-semibold text-xl text-green-900'>Total Amount : ₹ {totalAmount}</h1>
            </div>
            <h6 className='font-semibold my-5 px-2'>Transactions</h6>
            <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                <thead className="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='uppercase font-bold'>
                        <th className="px-3 py-3">Booking ID</th>
                        <th className="px-3 py-3">Transaction Id</th>
                        <th className="px-3 py-3">Amount</th>
                    </tr >
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => (
                            <tr key={index} className='bg-white border-b'>
                                <td  className="px-3 py-2">{booking.bookingId}</td>
                                <td  className="px-3 py-2">{booking.transactionId}</td>
                                <td  className="px-3 py-2">{booking.totalAmount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Payments
