import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


import { WorkStatus } from '../../../@types/booking';
import BookingCard from './BookingCard';
import { cancelBookingUserAPI, paymentAPI } from '../../../utils/api/userAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { removeBooking } from '../../../reducers/worker/bookingSlice';
import { loadStripe } from '@stripe/stripe-js';
import { IService } from '../../../@types/service';
import Conversation from '../../Common/Chat/Conversation';
import { useParams } from 'react-router-dom';


const BookedServices: React.FC = () => {
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();
    const { booking } = useAppSelector(state => state.booking);
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
                <div className='sticky md:top-0 top-0 pb-3 px-4 font-Montserrat bg-white'>
                    <h1 className="md:text-2xl font-bold text-3xl mb-1 md:text-left text-center">Bookings</h1>
                    <p className="md:block hidden font-thin text-sm pl-1 mb-6">
                        user/ <span className="font-semibold">Bookings</span>
                    </p>
                    <hr className="border-t-2 border-black opacity-15" />
                </div>
                <section className='grid md:grid-cols-2'>
                    {booking.map((bookedService, index) => (
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
                {booking.length <= 0 &&
                    <div className=''>
                    <img className=' mx-auto' src="/public/notfound.png" alt="" />
                    <h3 className='text-center font-bold font-Montserrat tracking-widest mt-2 text-[#150f3e]'>No Booking Found</h3>
                </div>
                }
            </>
            }
        </>
    )
}

export default BookedServices
