import React, { useEffect, useState } from 'react';
import { BsHourglassSplit } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './booking.css';
import { IBooking, WorkStatus } from '../../../@types/booking';


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

interface Error {
    message: string;
    index: number;
    key: string;
}

const BillingDetails: React.FC<BillingDetailsProb> = ({ isViewMore, booking, handleComplete }) => {
    const data = booking.additionalCharges?.length ? [...booking.additionalCharges] : [{ description: '', qty: 0, amount: 0 }]
    const [isBilling, setIsBilling] = useState<IBillingInfo[]>(data);
    const [isBillingError, setIsBillingError] = useState<Error | null>();
    const [isBillDone, setIsBillDone] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        setTotalAmount(isBilling.reduce((acc, curr) => (acc + (curr.amount * curr.qty)), booking.serviceMinimumAmount))
    }, [isBilling, booking.serviceMinimumAmount]);

    const handleValidation = (data: IBillingInfo, index: number) => {
        if (data.description.trim() == '') {
            setIsBillingError({ message: 'Enter description', index, key: 'description' });
            return false;
        }

        if (data.qty <= 0) {
            setIsBillingError({ message: 'Quantity must be greater than zero', index, key: 'qty' });
            return false;
        }

        if (data.amount <= 0) {
            setIsBillingError({ message: 'Amount must be greater than zero ', index, key: 'amount' });
            return false;
        }

        setIsBillingError(null);
        return true;
    }

    const handleRemoveBillingFields = (index: number) => {
        setIsBilling(isBilling.filter((_, i) => i != index));
    }

    const handleChange = (key: keyof IBillingInfo, value: string | number, index: number) => {
        const updatedBillInput = isBilling.map((item, idx) =>
            idx === index ? { ...item, [key]: value } : item
        );

        let generate = true;
        if (index > 0 && !handleValidation(updatedBillInput[index], index)) {
            generate = false;
        }

        if (index === isBilling.length - 1 && generate) {
            setIsBilling([...updatedBillInput, { description: '', qty: 0, amount: 0 }]);
        } else {
            setIsBilling(updatedBillInput);
        }
    }


    const handleGenerateBill = () => {
        const index = isBilling.length - 1;
        if (!handleValidation(isBilling[index], index)) {
            setIsBillingError(null);
            setIsBilling(isBilling.slice(0, -1))
        }
        setIsBillDone(true);
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (['e', 'E', '+', '-'].includes(event.key)) {
            event.preventDefault();
        }
    }

    return (
        <div className={`transition-height  ${isViewMore ? 'expanded' : 'collapsed'}`}>
            {isViewMore && (
                <>
                    <div className='my-3 w-full font-Montserrat'>
                        <h3 className='text-[17px] font-semibold text-center'>Billing Details</h3>
                        <table className='billing-table'>
                            <thead className='border-b-2 border-[#636363b5]'>
                                <tr>
                                    <th className='w-8/12 text-left pb-1'>Description</th>
                                    <th className='md:w-2/12 w-3/12 pb-1'>Quantity</th>
                                    <th className='w-2/12 pb-1'>Amount</th>
                                    {/* {!isBillDone && booking.workStatus != 'Completed' && <th><RxCross2 className='text-red-500 size-4' /></th>} */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Service amount</td>
                                    <td className='text-center py-1'>-</td>
                                    <td className='text-center py-1'>{booking.serviceMinimumAmount}</td>
                                    <td></td>
                                </tr>
                                {(booking.workStatus == WorkStatus.COMPLETED || isBillDone) &&
                                    isBilling.map((value, index) => (
                                        <tr key={index}>
                                            <td className='py-1'>{value.description}</td>
                                            <td className='text-center py-1'>{value.qty}</td>
                                            <td className='text-center py-1'>{value.amount}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                {booking.workStatus != 'Completed' && !isBillDone && isBilling.map((value, index) => (
                                    <tr key={index}>
                                        <td className='w-8/12 pb-1'>
                                            <input className={`billing-input text-left px-1 ${isBillingError?.index === index && isBillingError.key == 'description' && 'border-2 border-red-500 animate-pulse'}`}
                                                type="text"
                                                placeholder='Description'
                                                onChange={(e) => handleChange('description', e.target.value, index)}
                                                value={value.description}
                                            />
                                        </td>
                                        <td className='text-center md:w-2/12 w-3/12 px-1 pb-1'>
                                            <input className={`billing-input ${isBillingError?.index === index && isBillingError.key == 'qty' && 'border-2 border-red-500 animate-pulse'}`}
                                                type="number"
                                                placeholder='Qty'
                                                onChange={(e) => handleChange('qty', +e.target.value, index)}
                                                onKeyDown={handleKeyPress}
                                                value={value.qty || ''}
                                            />
                                        </td>
                                        <td className='text-center w-2/12 pb-1'>
                                            <input className={`billing-input ${isBillingError?.index === index && isBillingError.key == 'amount' && 'border-2 border-red-500 animate-pulse'}`}
                                                type="number"
                                                placeholder='Price'
                                                onChange={(e) => handleChange('amount', +e.target.value, index)}
                                                onKeyDown={handleKeyPress}
                                                value={value.amount || ''}
                                            />
                                        </td>
                                        <td className='pb-1 text-right'>{index != 0 && <button onClick={() => handleRemoveBillingFields(index)}><RxCross2 className='size-4 text-red-500' /></button>}</td>
                                    </tr>
                                ))}
                                <tr>
                                    {isBillingError && <td colSpan={3}><p className='text-xs text-red-500 px-2'>*{isBillingError.message}</p></td>}
                                </tr>
                                <tr className='h-5'>
                                    <td colSpan={4}></td>
                                </tr>
                                <tr className='font-semibold py-3 border-t border-dotted border-[#000] text-sm mt-10'>
                                    <td colSpan={2}> Total</td>
                                    <td className='text-center'>{totalAmount}</td>
                                </tr>

                            </tbody>
                        </table>

                        {!isBillDone && booking.workStatus != 'Completed' &&
                            <button className="bg-blue-950 mt-3 float-right text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={handleGenerateBill}>
                                <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Generate Bill
                            </button>
                        }

                        {isBillDone && booking.workStatus != 'Completed' &&
                            <button
                                className="relative float-right mx-3 my-2 px-8 text-black text-sm py-0.5 font-bold overflow-hidden bg-green-400 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                                onClick={() => handleComplete(isBilling)}
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

                    {booking.workStatus == 'Completed' && booking.paymentStatus == 'Completed' &&
                        <div className='flex justify-end gap-3 items-center py-4 text-green-700'>
                            <IoMdCheckmarkCircleOutline size={20} />
                            <h6 className='font-semibold text-base'>Payment Completed</h6>
                        </div>
                    }

                </>
            )}
        </div>
    )
}

export default BillingDetails
