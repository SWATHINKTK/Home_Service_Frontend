import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';


import { IBooking } from '../../../@types/booking';
import BookingCard from './BookingCard';
import { acceptWorkAPI, allBookingViewOnWorkerAPI } from '../../../utils/api/workerAPI';
import toast from 'react-hot-toast';



const WorksListing: React.FC = () => {
    const [bookedServices, setBookedServices] = useState<IBooking[]>([]);
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();

    const handleExpandToggle = (cardId: string | undefined) => {
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


    const handleCommitWork = async (bookingId: string, index: number) => {

        Swal.fire({
            text: "Are you sure you want to Accept this booking?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Accept",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = acceptWorkAPI({ bookingId })
                toast.promise(response,
                    {
                        loading: 'Loading',
                        success: `Great! You have accepted the Work`,
                        error: 'Error when Updating',
                    }
                )
                console.log('updated', response)
                setTimeout(() => {
                    const newData = [...bookedServices];
                    newData.splice(index, 1);
                    setBookedServices(newData)
                }, 1900);
            }
        });

    }

    return (
        <section className='mx-auto max-w-6xl'>
            <div className='flex justify-center  my-6'>
                <h1 className='font-Montserrat font-semibold text-3xl'>Bookings</h1>
            </div>
            <hr className="border-t-2 border-black opacity-15 mt-3 mb-5" />

            {/* <div className='overflow-y-scroll h-[80vh]'> */}
            <div className='grid md:grid-cols-2'>
                {bookedServices.map((bookedService, index) => (
                    <BookingCard
                        key={index}
                        bookedService={bookedService}
                        isExpanded={expandedCardId === bookedService._id}
                        onExpandToggle={() => handleExpandToggle(bookedService._id)}
                        handleCommitWork={() => handleCommitWork(bookedService._id!, index)}
                    />
                ))}

            </div>
            {/* </div> */}
        </section>
    )
}

export default WorksListing
