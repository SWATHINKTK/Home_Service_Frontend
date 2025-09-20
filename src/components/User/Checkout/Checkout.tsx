import React, { useEffect, useMemo, useState } from 'react';
import { MdOutlineMyLocation } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";



import Navbar from '../../Common/Navbar/Navbar';
import CustomModal from '../../Common/Modal/CustomModal';
import SlotSelecting from './SlotSelecting';
import { IAddress, ISlot } from '../../../@types/checkout';
import IssueDescription from './IssueDescription';
import AddressSelecting from './AddressSelecting';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { advanceBookingPaymentAPI, serviceDataRetrieveAPI } from '../../../utils/api/userAPI';
import { IService } from '../../../@types/service';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';


// const payments = [
//     { description: 'Service Amount', amount: 400 },
//     { description: 'Tax Amount', amount: 30 },
//     { description: 'Visiting Amount', amount: 30, free: true }
// ];

type Option = {
    name: string;
    buttonName: string;
    icon: React.ElementType;
};


const Checkout: React.FC = () => {
    const { serviceId } = useParams();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedSlot, setSelectedSlot] = useState<ISlot>({ date: undefined, endTime: undefined, startTime: undefined });
    const [bookingAddress, setBookingAddress] = useState<Partial<IAddress>>({});
    const [description, setDescription] = useState('');
    const [activeOption, setActiveOption] = useState<number>(0);
    const [modalContent, setModalContent] = useState<string>();
    const [serviceData, setServiceData] = useState<IService>();
    const [payments, setPayments] = useState<{ description: string, amount: number, free?: boolean }[]>([]);


    // const checkActiveOption = useCallback(() => {
    // if(!Object.keys(bookingAddress).length){
    //     setActiveOption(0)
    // }

    //     if(!selectedSlot.date){
    //         setActiveOption(1);
    //     }

    //     if(!description){
    //         setActiveOption(2)
    //     }
    // },[bookingAddress, description, selectedSlot.date]);
    useEffect(() => {
        const fetchData = async () => {
            if (serviceId) {
                const response = await serviceDataRetrieveAPI(serviceId);
                setServiceData(response.data);
                setPayments([
                    { description: 'Service Amount', amount: response.data.minimumAmount },
                    { description: 'Tax Amount', amount: 30 },
                    { description: 'Visiting Amount', amount: 30, free: true }
                ]);
            }
        }
        fetchData();
    }, [serviceId])

    useEffect(() => {
        if (bookingAddress && !Object.keys(bookingAddress).length) {
            setActiveOption(0)
            return
        }

        if (!selectedSlot || !selectedSlot.date || !selectedSlot.startTime) {
            setActiveOption(1);
            return;
        }

        if (!description) {
            setActiveOption(2);
        }
    }, [bookingAddress, description, modalIsOpen, selectedSlot])

    const options: Option[] = useMemo(() => ([
        {
            name: 'Address',
            buttonName: 'Select Address',
            icon: MdOutlineMyLocation
        },
        {
            name: 'Select Slot',
            buttonName: 'Select Slot',
            icon: FaCalendarAlt
        },
        {
            name: 'Description',
            buttonName: 'write issue',
            icon: BiSolidDetail
        }
    ]), []);

    const handleButtonClick = (index: number) => {
        setIsOpen(true);
        setModalContent(options[index].name);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const handleBooking = async () => {
        if (!bookingAddress || Object.keys(bookingAddress).length == 0) {
            toast.error('Please select an address');
        } else if (!selectedSlot || !selectedSlot.date || !selectedSlot.startTime) {
            toast.error('Please select a slot');
        } else if (!description) {
            toast.error('Please provide a description of the issue');
        } else {
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '');
            
            const response = await advanceBookingPaymentAPI({
                locationId: bookingAddress._id,
                date: selectedSlot.date,
                startTime: selectedSlot.startTime,
                endTime: selectedSlot.endTime,
                description,
                serviceId,
            });
            
            if (stripe) {
                const result = await stripe.redirectToCheckout({
                    sessionId: response.data,
                });
                if (result.error) {
                    console.error(result.error.message);
                }
            } else {
                console.error('Stripe failed to initialize.');
            }
        }
    }

    return (
        <>
            <Navbar worker={false} special={true} />
            <section className='max-w-6xl mx-auto pt-28 font-Montserrat px-3 z-0'>
                {/* Heading Section */}
                <div className='text-center'>
                    <h1 className='font-bold tracking-wide md:text-4xl text-2xl'>Booking Checkout</h1>
                    <p className='md:my-5 my-2 md:text-sm text-[11px] text-[#414141d8]'>Select and book our free available slots; if a worker is available at your chosen time, they will be assigned to you. If not, your request will be automatically canceled after one hour.</p>
                </div>

                <div className='md:flex md:gap-8 md:w-[90%] mx-auto mt-10'>
                    <div className='w-full'>
                        <div className='mx-auto rounded-md border'>
                            <div className='border-b py-3 flex items-center px-5'>
                                <div className='flex'>
                                    <img className='h-16 max-w-16 object-cover rounded-sm' src={serviceData?.icon} alt="service icon" />
                                    <div>
                                        <h4 className='mx-3 text-lg font-semibold'>{serviceData?.serviceName ?? "*****"}</h4>
                                        <p className='text-xs mx-3 line-clamp-2 break-all'>{serviceData?.serviceDescription ?? "*****************"}</p>
                                    </div>
                                </div>

                            </div>
                            {options.map((option, index) => (
                                <div key={index} className='border-b py-3 flex flex-col justify-center px-5 '>
                                    <div className='flex w-full '>
                                        <div className='h-11 w-11 bg-slate-100 rounded-lg flex justify-center items-center'>
                                            {React.createElement(option.icon, { size: 20 })}
                                        </div>
                                        <div className='mx-3'>
                                            <div className='flex items-center justify-between gap-2'>
                                                <h4 className='font-semibold'>{option.name}</h4>

                                            </div>
                                            {bookingAddress && Object.keys(bookingAddress).length != 0 && option.name == 'Address' &&
                                                <div className='text-sm text-[#09123e] font-medium'>
                                                    <p>{bookingAddress.buildingName}<span className='mx-2'>-</span><span className='font-bold'>{bookingAddress.phoneNumber}</span></p>
                                                    <p>{bookingAddress.locationDetails}</p>
                                                    <button onClick={() => handleButtonClick(0)} className='mt-2 border rounded-md px-2 border-blue-500 text-blue-600 shadow-sm shadow-blue-200'>edit</button>
                                                </div>
                                            }
                                            {selectedSlot.date && option.name == 'Select Slot' &&
                                                <>
                                                    <p className='text-sm text-[#09123e] font-medium'>
                                                        {moment(selectedSlot.date).format("Do MMMM YY ,ddd")}
                                                        <span className='mx-2'>{selectedSlot.endTime}</span>
                                                    </p>
                                                    <button onClick={() => handleButtonClick(1)} className='mt-2 border rounded-md px-2 border-blue-500 text-blue-600 shadow-sm shadow-blue-200'>edit</button>
                                                </>
                                            }
                                            {description && option.name == 'Description' &&
                                                <p className='text-sm text-[#09123e] font-medium line-clamp-2 break-all'>{description}</p>
                                            }
                                        </div>
                                    </div>

                                    {index == activeOption && <button className='bg-[#77cc76] rounded-md mt-3 font-semibold py-1' onClick={() => handleButtonClick(index)}>{option.buttonName}</button>}
                                </div>
                            ))}
                        </div>


                    </div>
                    <div className='flex items-center'>
                        <svg className='w-10 h-[21rem] md:block hidden' viewBox="0 0 12 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667ZM6 395.667C3.05448 395.667 0.666667 398.054 0.666667 401C0.666667 403.946 3.05448 406.333 6 406.333C8.94552 406.333 11.3333 403.946 11.3333 401C11.3333 398.054 8.94552 395.667 6 395.667ZM5 6L5 401H7L7 6H5Z" fill="#CABFBF" />
                        </svg>
                    </div>
                    <div className='md:w-8/12 md:my-0 my-5'>
                        <div className='w-full border-2 rounded-lg text-center p-5'>
                            <h3 className='text-[17px] font-semibold text-center mb-5'>Payment Summary</h3>
                            {payments.map((payment, index) => (
                                <div key={index} className='flex justify-between pb-2 text-sm font-semibold text-gray-700'>
                                    <h6>{payment.description}</h6>
                                    <h6>
                                        <span className={`${payment.free && 'line-through'}`}>₹ {payment.amount}</span>
                                        <span className={`${!payment.free ? 'hidden' : 'ml-2 text-green-700'}`}>Free</span>
                                    </h6>
                                </div>
                            ))}
                            <hr className="border-t-2 border-dotted border-gray-500 mt-5" />
                            <div className='flex justify-between mt-2 text-sm font-semibold text-gray-700'>
                                <h6>Total Amount</h6>
                                <h6>{payments.reduce((acc, payment) => acc + (payment.free ? 0 : payment.amount), 0)}</h6>
                            </div>
                            <div className="p-1 text-sm my-4 text-blue-800 rounded-lg bg-blue-50" role="alert">
                                <span className="font-medium"></span>Confirmation of booking pay <span className='font-bold'>₹ {payments[0] && payments[0].amount * 2 / 10}</span> Rupees advance.
                            </div>
                            <button className='bg-[#1c1e5f] w-full rounded-md py-1 text-white' onClick={handleBooking} >Book Service</button>
                        </div>
                    </div>
                </div>
                <div className='my-3'>
                    <h4 className='font-semibold'>Cancellation & reschedule policy</h4>
                    <p className='text-sm mt-1'>Free cancellations/reschedules if done more than 3 hrs before the service or if a professional isn’t assigned. A fee will be charged otherwise.</p>
                </div>

            </section>
            <CustomModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                {modalContent == 'Address' && <AddressSelecting setBookingAddress={setBookingAddress} modalClose={closeModal} />}
                {modalContent == 'Select Slot' && <SlotSelecting selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} modalClose={closeModal}/>}
                {modalContent == 'Description' && <IssueDescription description={description} setDescription={setDescription} modalClose={closeModal} />}

            </CustomModal>
        </>
    )
}

export default Checkout
