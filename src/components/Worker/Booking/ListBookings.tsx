import React, { useEffect, useState } from 'react';
import { BsChatText } from "react-icons/bs";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


import { IBooking } from '../../../@types/booking';
import { bookedDataRetrieveAPI } from '../../../utils/api/userAPI';
import BookingCard from './BookedServiceCard';
import { cancelBookingUserAPI } from '../../../utils/api/userAPI';






const BookedServices: React.FC = () => {
    const [bookedServices, setBookedServices] = useState<IBooking[]>([]);

    useEffect(() => {
        (async () => {
            const response = await bookedDataRetrieveAPI();
            console.log(response.data)
            setBookedServices(response.data)
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
                setBookedServices(newData)
            }
          });
       
    }

    return (
        <>
            {/* Services View Div Section */}
            <section className='grid md:grid-cols-2'>
                {bookedServices.map((service, index) => (
                    <>
                        <div key={index} className='bg-[#F2F2F2] md:p-4 p-2 mx-2 my-3 shadow-md rounded-md font-Montserrat '>
                            <BookingCard service={service} />
                            {service.workStatus !== 'Completed' && service.workStatus !== 'Cancelled' ?
                                (<div className='flex justify-between'>
                                    <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3' onClick={() => handleCancelBooking(service._id!, index)} >Cancel</button>
                                    {service.workStatus != 'Pending' && service.workStatus !== 'Completed' && (
                                        <button className='bg-white px-4 py-1 rounded-md mt-3 flex items-center'>
                                            <BsChatText />
                                            <h5 className='text-sm font-bold mx-1'>Chat</h5>
                                        </button>
                                    )}
                                </div>)
                                :
                                (
                                    <div className='mt-3'>
                                        <div className='flex justify-center w-full'>
                                            <h5 className={`font-semibold ${service.workStatus == 'Cancelled' ? 'text-red-900' : 'text-green-950'}`}>{service.workStatus}</h5>
                                        </div>
                                    </div>

                                )}
                        </div>
                    </>
                ))}
            </section>
        </>
    )
}

export default BookedServices
