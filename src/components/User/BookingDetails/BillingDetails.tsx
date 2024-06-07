import React, { useEffect, useState } from 'react'
import { IBillingInfo, IBooking } from '../../../@types/booking';


interface BillingDetailsProb {
    isViewMore: boolean;
    booking: IBooking;
    handlePayment: () => void;
}

const BillingDetails: React.FC<BillingDetailsProb> = ({ isViewMore, booking, handlePayment }) => {
    const [billingInfo, setBillingInfo] = useState<IBillingInfo[]>([]);


    useEffect(() => {
        if (booking?.additionalCharges) {
            setBillingInfo([...booking.additionalCharges]);
        }
    }, [billingInfo, booking.additionalCharges, booking.serviceMinimumAmount]);
    return (
        <div className={`transition-height ${isViewMore ? 'expanded' : 'collapsed'}`}>
            {isViewMore && (
                <>
                    <div className='my-3 w-full font-Montserrat'>
                        <h3 className='text-[17px] font-semibold text-center'>Billing Details</h3>
                        <table className='w-full text-[0.8rem] mt-3'>
                            <thead className='border-b-2'>
                                <th className='w-8/12 text-left'>Description</th>
                                <th className='md:w-2/12 w-3/12'>Quantity</th>
                                <th className='w-2/12'>Amount</th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Service amount</td>
                                    <td className='text-center'>-</td>
                                    <td className='text-center'>{booking.serviceMinimumAmount}</td>
                                    <td></td>
                                </tr>
                                {billingInfo.map((bill, index) => (
                                    <tr key={index}>
                                        <td>{bill.description}</td>
                                        <td className='text-center'>{bill.qty}</td>
                                        <td className='text-center'>{bill.amount}</td>
                                    </tr>
                                ))}
                                <tr className='font-semibold py-3'>
                                    <td colSpan={2}> Total</td>
                                    <td className='text-center'>{booking.totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-end'>
                        <button className="bg-[#071809] text-white border border-emerald-400 border-b-4 font-semibold overflow-hidden relative px-3 py-1 text-sm rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={handlePayment}>
                            <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                            Pay  ₹ {booking.totalAmount}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default BillingDetails
