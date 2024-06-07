import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


import { WorkStatus } from '../../../@types/booking';
import BookingCard from './BookingCard';
import { cancelBookingUserAPI, paymentAPI } from '../../../utils/api/userAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { updateWorkStatus } from '../../../reducers/worker/bookingSlice';
import { loadStripe } from '@stripe/stripe-js';
import { IService } from '../../../@types/service';


const BookedServices: React.FC = () => {
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();
    const {booking} = useAppSelector(state => state.booking);
    const dispatch = useAppDispatch();

    const handleExpandToggle = (cardId:string | undefined) => {
        if (cardId == expandedCardId) {
          setExpandedCardId('');
        } else {
          setExpandedCardId(cardId);

        }
      };


    const handleCancelBooking = async(bookingId:string, index:number) =>{
        const updateStatus = {
            bookingId,
            status:'Cancelled'
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
                dispatch(updateWorkStatus({index, status:WorkStatus.CANCELLED}));
            }
          });
       
    }

    const handlePayment = async(bookingId:string, serviceName:string) => {
        const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY || '');
        
        const response = await paymentAPI(bookingId, serviceName);
        console.log("kkk",response)
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
            {/* Services View Div Section */}
            <section className='grid md:grid-cols-2'>
                {booking.map((bookedService, index) => (
                            <BookingCard 
                                key={index}
                                bookedService={bookedService}
                                isExpanded={expandedCardId === bookedService._id}
                                onExpandToggle={() => handleExpandToggle(bookedService._id)}
                                handleCancelBooking = {() => handleCancelBooking(bookedService._id!, index)}
                                handlePayment = {() => handlePayment(bookedService._id!, (bookedService.serviceId as IService).serviceName)}
                            />
                ))}

            </section>
        </>
    )
}

export default BookedServices
