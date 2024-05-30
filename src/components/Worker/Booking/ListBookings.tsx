import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';


import { IBooking } from '../../../@types/booking';
import BookingCard from './BookingCard';
import { allBookingViewOnWorkerAPI } from '../../../utils/api/workerAPI';
import toast from 'react-hot-toast';



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
            const response = await allBookingViewOnWorkerAPI();
            console.log(response.data)
            setBookedServices(response.data);
        })()
    }, []);


    const handleCancelBooking = async(bookingId:string, index:number) =>{
        
        Swal.fire({
            text: "Are you sure you want to Accept this booking?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Accept",
          }).then(async (result) => {
            if (result.isConfirmed) {
                toast.success('Sucessfully completed',{position:'bottom-center'})
                const newData = [...bookedServices];
                newData.splice(index,1)
                setBookedServices(newData)
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
