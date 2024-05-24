import React from 'react';

import PaymentSummary from '../Bookings/PaymentSummary';
import './BookedServiceCard.css';




const payments = [
    { description: 'Service Amount', amount: 300 },
    { description: 'Tax Amount', amount: 30 },
    { description: 'Visiting Amount', amount: 300 },
    { description: 'Extra Amount', amount: 300 }
]

interface BillingDetailsProb{
    isViewMore:boolean
}

const BillingDetails: React.FC<BillingDetailsProb> = ({isViewMore}) => {

    return (
        <div className={`transition-height ${isViewMore ? 'expanded' : 'collapsed'}`}>
            {isViewMore && (
                <>
                    <div className='my-3 w-full'>
                        {/* <h4 className='text-[1.2rem] font-semibold'>Billing Details</h4> */}
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
                </>
            )}
        </div>
    )
}

export default BillingDetails
