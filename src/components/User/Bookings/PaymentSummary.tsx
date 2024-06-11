import React, { useEffect, useState } from 'react';
import { serviceDataRetrieveAPI } from '../../../utils/api/userAPI';

interface Payment {
    description: string,
    amount: number,
    free?: boolean
}

interface PaymentSummaryProp {
    serviceId: string;
}

const PaymentSummary: React.FC<PaymentSummaryProp> = ({ serviceId }) => {

    const [payments, setPayments] = useState<Payment[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            if (serviceId) {
                const response = await serviceDataRetrieveAPI(serviceId);
                const payments = [
                    { description: 'Service Amount', amount: response.data.minimumAmount },
                    { description: 'Tax Amount', amount: 30 },
                    { description: 'Visiting Amount', amount: 30, free: true }
                ];
                setPayments([...payments]);
            }
        }
        fetchData();
    }, [serviceId])

    return (
        <>
            <h3 className='text-[17px] font-semibold text-center'>Payment Summary</h3>

            {payments.map((payment, index) => (
                <div key={index} className='flex justify-between px-7 pb-2'>
                    <h6 className='text-sm font-semibold text-gray-700'>{payment.description}</h6>
                    <h6 className='text-sm font-semibold text-gray-700'>
                        <span className={`${payment.free && 'line-through'}`}>₹ {payment.amount}</span>
                        <span className={`${!payment.free ? 'hidden' : 'ml-2 text-green-700'}`}>Free</span>
                    </h6>

                </div>
            ))}
            <hr className="border-t-2 border-dotted border-gray-500 mx-auto w-[90%] mt-2 " />
            <div className='flex justify-between px-7 mt-1'>
                <h6 className='text-sm font-semibold text-gray-700'>Total Amount</h6>
                <h6 className='text-sm font-semibold text-gray-700'>{payments[0] && payments[0].amount}</h6>
            </div>
            <div className="p-4 my-4 mx-6 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
                <span className="font-medium"></span>confirmation of booking pay <span className='font-bold'>₹ {payments[0] && payments[0].amount * 2 / 10}</span> rupees advance.
            </div>
        </>
    )
}

export default PaymentSummary;
