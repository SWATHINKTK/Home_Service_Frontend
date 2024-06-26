import React, { useEffect, useRef, useState } from 'react';
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { LuPlusCircle } from "react-icons/lu";
import { BsHourglassSplit } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import './BookedServiceCard.css';
import { IBooking } from '../../../@types/booking';


interface BillingDetailsProb {
    isViewMore: boolean;
    booking: IBooking;
    handleComplete: (additionalCharges: IBillingInfo[]) => void;
}

interface IBillingInfo {
    description: string;
    qty: number;
    amount: number;
}
const BillingDetails: React.FC<BillingDetailsProb> = ({ isViewMore, booking, handleComplete }) => {
    const [billingInfo, setBillingInfo] = useState<IBillingInfo[]>(booking.additionalCharges || []);
    const [isBilling, setIsBilling] = useState<IBillingInfo>({ description: '', qty: 0, amount: 0 });
    const billingRef = useRef<HTMLFormElement>(null);
    const [billingInfoError, setBillingInfoError] = useState('');
    const [isBillDone, setIsBillDone] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        setTotalAmount(billingInfo.reduce((acc, curr) => (acc + (curr.amount * curr.qty)), booking.serviceMinimumAmount))
    }, [billingInfo, booking.serviceMinimumAmount]);

    const handleValidation = () => {
        if (isBilling.description.trim() == '') {
            setBillingInfoError('enter description');
            return false;
        }

        if (isBilling.qty <= 0) {
            setBillingInfoError('quantity atleast one required');
            return false;
        }

        if (isBilling.amount <= 0) {
            setBillingInfoError('enter proper price');
            return false;
        }
        setBillingInfoError('');
        return true
    }

    const handleAddBillingFields = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (handleValidation()) {
            setBillingInfo([...billingInfo, isBilling]);
            setIsBilling({ description: '', qty: 0, amount: 0 });
            billingRef.current?.reset();
        }
    };

    const handleRemoveBillingFields = (index: number) => {
        setBillingInfo(billingInfo.filter((_, i) => i != index));
    }


    const handleChange = (key: keyof IBillingInfo, value: string | number) => {
        setIsBilling((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleGenerateBill = () => {
        const totalAmount = billingInfo.reduce((acc, curr) => (acc + (curr.amount * curr.qty)), booking.serviceMinimumAmount);
        setTotalAmount(totalAmount)
        setIsBillDone(true);
    }
    return (
        <div className={`transition-height ${isViewMore ? 'expanded' : 'collapsed'}`}>
            {isViewMore && (
                <>
                    <div className='my-3 w-full font-Montserrat'>
                        <h3 className='text-[17px] font-semibold text-center'>Billing Details</h3>
                        <table className='w-full text-[0.8rem] mt-3'>
                            <thead className='border-b-2 border-[#636363b5]'>
                                <tr>
                                    <th className='w-8/12 text-left pb-1'>Description</th>
                                    <th className='md:w-2/12 w-3/12 pb-1'>Quantity</th>
                                    <th className='w-2/12 pb-1'>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Service amount</td>
                                    <td className='text-center py-1'>-</td>
                                    <td className='text-center py-1'>{booking.serviceMinimumAmount}</td>
                                    <td></td>
                                </tr>
                                {billingInfo.map((bill, index) => (
                                    <tr key={index}>
                                        <td>{bill.description}</td>
                                        <td className='text-center'>{bill.qty}</td>
                                        <td className='text-center'>{bill.amount}</td>
                                        {!isBillDone && <td onClick={() => handleRemoveBillingFields(index)}><RxCross2 size={17} className='text-red-700' /></td>}
                                    </tr>
                                ))}
                                <tr className='font-semibold py-3 border-t border-dotted border-[#000] text-sm mt-10'>
                                    <td colSpan={2}> Total</td>
                                    <td className='text-center'>{totalAmount}</td>
                                </tr>

                            </tbody>
                        </table>
                        {!isBillDone &&
                            <form ref={billingRef} onSubmit={handleAddBillingFields} className='mt-5'>
                                <div className='flex w-full justify-center items-center mt-2'>
                                    <PiDotsSixVerticalBold size={35} className='hidden md:block' />
                                    <input type="text"
                                        className='bg-white w-6/12 rounded-lg border-2 h-7 px-2 outline-none text-sm'
                                        placeholder='Description'
                                        onChange={(e) => handleChange('description', e.target.value)}
                                    />-
                                    <input type="number"
                                        className='bg-white w-6/12 rounded-lg border-2 h-7 px-2 outline-none text-sm'
                                        min={1} max={10} placeholder='Qty'
                                        onChange={(e) => handleChange('qty', e.target.value)}
                                    />-
                                    <input type="number"
                                        className='bg-white w-6/12 rounded-lg border-2 h-7 px-2 outline-none text-sm'
                                        min={1} placeholder='Price'
                                        onChange={(e) => handleChange('amount', e.target.value)}
                                    />
                                    <button><LuPlusCircle className='mx-1' /></button>
                                </div>
                                <p className="mx-3 mt-0.5 text-red-500 text-xs italic">{billingInfoError}</p>
                                <button className='text-sm bg-blue-900 text-white px-3 rounded-md font-semibold' onClick={handleGenerateBill}>Done</button>

                            </form>
                        }
                        {isBillDone && booking.workStatus != 'Completed' &&
                            <button
                                className="relative float-right mx-3 my-2 px-8 text-black text-sm py-0.5 font-bold overflow-hidden bg-green-400 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                                onClick={() => handleComplete(billingInfo)}
                            >
                                Completed
                            </button>
                        }
                    </div>
                    {booking.workStatus == 'Completed' && booking.paymentStatus == 'Pending' &&
                        <div className='flex justify-end gap-3 items-center py-4 text-red-700'>
                            <BsHourglassSplit size={15} />
                            <h6 className='font-semibold text-base'>Payment Pending</h6>
                        </div>
                    }

                </>
            )}
        </div>
    )
}

export default BillingDetails
