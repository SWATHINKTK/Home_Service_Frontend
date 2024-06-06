import React from 'react';

interface Payment {
    description: string,
    amount: number
}

// const payments = [
//     { description: 'Service Amount', amount: 300 },
//     { description: 'Tax Amount', amount: 30 },
//     { description: 'Visiting Amount', amount: 300 },
//     { description: 'Extra Amount', amount: 300 }
// ]

interface PaymentSummaryProp {
    payments: Payment[]
}

const PaymentSummary: React.FC<PaymentSummaryProp> = ({ payments }) => {

    return (
        <>
            <h3 className='text-[17px] font-semibold text-center'>Payment Summary</h3>

            {payments.map((payment, index) => (
                <div key={index} className='flex justify-between px-7 pb-2'>
                    <h6 className='text-sm font-semibold text-gray-700'>{payment.description}</h6>
                    <h6 className='text-sm font-semibold text-gray-700'>₹ {payment.amount}</h6>
                </div>
            ))}
            <hr className="border-t-2 border-dotted border-gray-500 mx-auto w-[90%] mt-2 " />
            <div className='flex justify-between px-7 '>
                <h6 className='text-sm font-semibold text-gray-700'>Total Amount</h6>
                <h6 className='text-sm font-semibold text-gray-700'>368</h6>
            </div>

        </>
    )
}

export default PaymentSummary;
