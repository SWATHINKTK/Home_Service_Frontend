import React, { useState } from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

import BookingCard from './BookingCard';
import { acceptWorkAPI, startWorkAPI, workVerificationAPI } from '../../../utils/api/workerAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { removeBooking, updateWorkStatus } from '../../../reducers/worker/bookingSlice';
import { IUser } from '../../../@types/user';
import { WorkStatus } from '../../../@types/booking';
import { numberRegex } from '../../../constants/regex';
import { AxiosError } from 'axios';


const WorksListing: React.FC = () => {
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();
    const {booking} = useAppSelector(state => state.booking);
    const dispatch = useAppDispatch();

    const handleExpandToggle = (cardId: string | undefined) => {
        if (cardId == expandedCardId) {
            setExpandedCardId('');
        } else {
            setExpandedCardId(cardId);

        }
    };
    


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
                        success: () => {
                            setTimeout(() => {
                                dispatch(removeBooking({index}));
                            }, 1900);
                            return `Great! You have accepted the Work`
                        },
                        error: 'Error when Updating',
                    }
                )
                console.log('updated', response)
                
            }
        });

    }


    const handleStartWork = async (bookingId: string, userEmail:string, index: number) => {

        Swal.fire({
            text: "Are you sure to start work?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Start",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = startWorkAPI({ bookingId,userEmail })
                toast.promise(response,
                    {
                        loading: 'Loading',
                        success: () => { 
                            dispatch(updateWorkStatus({index, status:WorkStatus.IN_PROGRESS}));
                            return `OTP Send To Worker.`
                        },
                        error: 'Error when Updating',
                    }
                )
            
                
            }
        });
    }

    const handleVerification = (bookingId: string, index: number) => (otp: string, setError:React.Dispatch<React.SetStateAction<string>>) => {
        console.log(bookingId, index, otp);
        if (!numberRegex.test(otp)) {
            setError("Enter valid OTP");
            return;
        }

        const response = workVerificationAPI({ bookingId,otp })
                toast.promise( response,
                    {
                        loading: 'Loading',
                        success: () => {
                            dispatch(updateWorkStatus({index, status:WorkStatus.STARTED}));
                            return `OTP Verification Successful.`
                        },
                        error: (error) => {
                            if (error instanceof AxiosError && error.response) {
                                setError(error.response.data.errors[0].message);
                            }
                            return `OTP Verification Failed`
                        },
                    }
                )
                console.log("+++++hai+++++")

                console.log(response)

        // setError('invalid')

    };

    return (
        <section className='mx-auto max-w-6xl'>
            <div className='flex justify-center  my-6'>
                <h1 className='font-Montserrat font-semibold text-3xl'>Bookings</h1>
            </div>
            <hr className="border-t-2 border-black opacity-15 mt-3 mb-5" />

            {/* <div className='overflow-y-scroll h-[80vh]'> */}
            <div className='grid md:grid-cols-2'>
                {booking.map((bookedService, index) => (
                    <BookingCard
                        key={index}
                        bookedService={bookedService}
                        isExpanded={expandedCardId === bookedService._id}
                        onExpandToggle={() => handleExpandToggle(bookedService._id)}
                        handleCommitWork={() => handleCommitWork(bookedService._id!, index)}
                        handleStartWork={() => handleStartWork(bookedService._id!, (bookedService.userId as IUser).email, index)}
                        handleVerification={handleVerification(bookedService._id!, index)}
                    />
                ))}

            </div>
            {/* </div> */}
        </section>
    )
}

export default WorksListing
