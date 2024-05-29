import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


import { IBooking } from '../../../@types/booking';
import { bookedDataRetrieveAPI } from '../../../utils/api/userAPI';
import BookingCard from './BookingCard';
import { cancelBookingUserAPI } from '../../../utils/api/userAPI';


const BookedServices: React.FC = () => {
    const [bookedServices, setBookedServices] = useState<IBooking[]>([]);
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();

    const handleExpandToggle = (cardId:string | undefined) => {
        if (cardId == expandedCardId) {
          setExpandedCardId('');
        } else {
          setExpandedCardId(cardId);

        }
      };
    

    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI();
            console.log(response.data)
            setBookedServices(response.data);
        })()
    }, []);


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
                const newData = [...bookedServices];
                newData[index].workStatus = 'Cancelled'
                newData[index].paymentStatus = 'Cancelled'
                setBookedServices(newData)
                console.log(bookedServices)
            }
          });
       
    }

    return (
        <>
            {/* Services View Div Section */}
            <section className='grid md:grid-cols-2'>
                {bookedServices.map((bookedService, index) => (
                            <BookingCard 
                                key={index}
                                bookedService={bookedService}
                                isExpanded={expandedCardId === bookedService._id}
                                onExpandToggle={() => handleExpandToggle(bookedService._id)}
                                handleCancelBooking = {() => handleCancelBooking(bookedService._id!, index)}
                            />
                ))}

            </section>
        </>
    )
}

export default BookedServices
