import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoIosArrowDown } from "react-icons/io";



import { WorkStatus } from '../../../@types/booking';
import BookingCard from './BookingCard';
import { cancelBookingUserAPI, paymentAPI } from '../../../utils/api/userAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { nextPage, removeBooking } from '../../../reducers/worker/bookingSlice';
import { loadStripe } from '@stripe/stripe-js';
import { IService } from '../../../@types/service';
import Conversation from '../../Common/Chat/Conversation';

interface BookedServiceProb {
    heading: string
}

const BookedServices: React.FC<BookedServiceProb> = ({ heading }) => {
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();
    const { bookings, currentPage, totalPages } = useAppSelector(state => state.booking);
    const dispatch = useAppDispatch();
    const { conversationId } = useParams();


    const handleExpandToggle = (cardId: string | undefined) => {
        if (cardId == expandedCardId) {
            setExpandedCardId('');
        } else {
            setExpandedCardId(cardId);

        }
    };


    const handleCancelBooking = async (bookingId: string, index: number) => {
        const updateStatus = {
            bookingId,
            status: WorkStatus.CANCELLED
        }
        Swal.fire({
            title: "Cancel Booking",
            text: "Are you sure you want to cancel this booking?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await cancelBookingUserAPI(updateStatus);
                toast.success(`Booking has been successfully canceled`);
                dispatch(removeBooking({ index }));
            }
        });

    }

    const handlePayment = async (bookingId: string, serviceName: string) => {
        const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY || '');

        const response = await paymentAPI(bookingId, serviceName);
        console.log("kkk", response)
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


    return (
        <>
            {conversationId ? <Conversation /> : <>
                <div className='sticky top-0 pb-3 px-4 md:pt-0 pt-3 font-Montserrat bg-white'>
                    <h1 className="md:text-2xl font-bold text-3xl md:mb-1 mb-5 md:text-left text-center">{heading}</h1>
                    <p className="md:block hidden font-thin text-sm pl-1 mb-4">
                        user/ <span className="font-semibold">{heading}</span>
                    </p>
                    <hr className="border-t-2 border-black opacity-15" />
                </div>
                <section className='grid md:grid-cols-2'>
                    {bookings.map((bookedService, index) => (
                        <BookingCard
                            key={index}
                            bookedService={bookedService}
                            isExpanded={expandedCardId === bookedService._id}
                            onExpandToggle={() => handleExpandToggle(bookedService._id)}
                            handleCancelBooking={() => handleCancelBooking(bookedService._id!, index)}
                            handlePayment={() => handlePayment(bookedService._id!, (bookedService.serviceId as IService).serviceName)}
                        />
                    ))}
                </section>
                {bookings.length <= 0 ?
                    <div className=''>
                        <img className=' mx-auto' src="/public/notfound.png" alt="" />
                        <h3 className='text-center font-bold font-Montserrat tracking-widest mt-2 text-[#150f3e]'>No Booking Found</h3>
                    </div>
                :
                    <div className='flex justify-center ite font-bold text-sm my-7'>
                        <button className={`flex justify-center items-end border-2 drop-shadow-lg rounded-md border-[#a5a9a5bc] px-3 py-0.5 hover:scale-105 transition transform duration-300 ${currentPage == totalPages && 'hidden'}`} onClick={() => dispatch(nextPage())}>
                            View More 
                            <IoIosArrowDown className='ml-1 animate-bounce '/>
                        </button>
                    </div>
                }
            </>
            }
        </>
    )
}

export default BookedServices
