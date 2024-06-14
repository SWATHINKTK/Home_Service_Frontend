import React, { useState } from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

import BookingCard from './BookingCard';
import { acceptWorkAPI, completedWorkAPI, startWorkAPI, workVerificationAPI } from '../../../utils/api/workerAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { additionalChargeUpdate, removeBooking, updateWorkStatus } from '../../../reducers/worker/bookingSlice';
import { IUser } from '../../../@types/user';
import { IBillingInfo, WorkStatus } from '../../../@types/booking';
import { numberRegex } from '../../../constants/regex';
import { AxiosError } from 'axios';
import Conversation from '../../Common/Chat/Conversation';
import { useParams } from 'react-router-dom';



const WorksListing: React.FC = () => {
    const [expandedCardId, setExpandedCardId] = useState<string | undefined>();
    const { booking } = useAppSelector(state => state.booking);
    const dispatch = useAppDispatch();
    const { conversationId } = useParams();
    console.log(1)

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
                                dispatch(removeBooking({ index }));
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


    const handleStartWork = async (bookingId: string, userEmail: string, index: number) => {

        Swal.fire({
            text: "Are you sure to start work?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Start",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = startWorkAPI({ bookingId, userEmail })
                toast.promise(response,
                    {
                        loading: 'Loading',
                        success: () => {
                            dispatch(updateWorkStatus({ index, status: WorkStatus.IN_PROGRESS }));
                            return `OTP Send To Worker.`
                        },
                        error: 'Error when Updating',
                    }
                )


            }
        });
    }

    const handleVerification = (bookingId: string, index: number) => (otp: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
        console.log(bookingId, index, otp);
        if (!numberRegex.test(otp)) {
            setError("Enter valid OTP");
            return;
        }

        const response = workVerificationAPI({ bookingId, otp })
        toast.promise(response,
            {
                loading: 'Loading',
                success: () => {
                    dispatch(updateWorkStatus({ index, status: WorkStatus.STARTED }));
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

    };

    const handleCompleted = (bookingId: string, index: number) => async (additionalCharges: IBillingInfo[]) => {
        console.log(additionalCharges, bookingId, index);
        const response = await completedWorkAPI({ bookingId, additionalCharges });
        toast.success(response.data.message);
        dispatch(updateWorkStatus({ index, status: WorkStatus.COMPLETED }));
        dispatch(additionalChargeUpdate({ index, additionalCharges }));
    }

    return (
        <section className='mx-auto max-w-6xl'>

            {conversationId ? <Conversation /> :
                <>

                    <div className='grid lg:grid-cols-2'>
                        {booking.map((bookedService, index) => (
                            <BookingCard
                                key={index}
                                bookedService={bookedService}
                                isExpanded={expandedCardId === bookedService._id}
                                onExpandToggle={() => handleExpandToggle(bookedService._id)}
                                handleCommitWork={() => handleCommitWork(bookedService._id!, index)}
                                handleStartWork={() => handleStartWork(bookedService._id!, (bookedService.userId as IUser).email, index)}
                                handleVerification={handleVerification(bookedService._id!, index)}
                                handleCompleted={handleCompleted(bookedService._id!, index)}
                            />
                        ))}
                    </div>
                    {booking.length == 0 &&
                        <div className=''>
                            <img className=' mx-auto' src="/public/notfound.png" alt="" />
                            <h3 className='text-center font-bold font-Montserrat tracking-widest mt-2 text-[#150f3e]'>No Booking Found</h3>
                        </div>
                    }
                </>
            }
        </section>
    )
}

export default WorksListing
