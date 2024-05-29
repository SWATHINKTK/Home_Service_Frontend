import React from 'react';
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { LuPlusCircle } from "react-icons/lu";
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
                    <div className='my-3 w-full font-Montserrat'>
                        <h3 className='text-[17px] font-semibold text-center'>Billing Details</h3>
                        <div className='flex w-full justify-center items-center mt-'>
                            <PiDotsSixVerticalBold className='hidden md:block'/>
                            <input type="text" className='bg-white w-6/12 rounded-lg border-2 h-7 px-2 outline-none text-sm' placeholder='Description' />-
                            <input type="text" className='bg-white w-3/12  rounded-lg border-2 h-7 px-2 outline-none text-sm' placeholder='Qty' />-
                            <input type="text" className='bg-white w-3/12 rounded-lg border-2 h-7 px-2 outline-none text-sm' placeholder='Price' />
                            <LuPlusCircle className='mx-1'/>
                        </div>
                    </div>
                    <PaymentSummary payments={payments}/>
                </>
            )}
        </div>
    )
}

export default BillingDetails
