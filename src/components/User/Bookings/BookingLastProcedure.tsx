
import { loadStripe } from '@stripe/stripe-js';

import PaymentSummary from './PaymentSummary';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { advanceBookingPaymentAPI } from '../../../utils/api/bookingAPI';
import { useParams } from 'react-router-dom';


interface IBookingData {
    buildingName: string;
    date: string;
    startTime: string;
    endTime: string;
    description?: string;
    serviceId?: string;
    location:{
        longitude:number,
        latitude:number
    }
}

const BookingLastProcedure: React.FC = () => {
   
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<IBookingData>();
    const location = useAppSelector((state) => state.location);
    const { serviceId } = useParams();




    const createRequiredValidator = (fieldName: string) => (value: string) => {
        return !value.trim() ? `${fieldName} is required.` : undefined;
    };


    const validateDate = (value: string) => {
        const today = new Date();
        const selectedDate = new Date(value);
        today.setDate(today.getDate() - 1);
        return selectedDate > today
    };

    const validateStartTime = (value: string) => {
        const { date } = getValues();
        const selectedDateTime = new Date(`${date}T${value}`);
        const currentDateTime = new Date();
        const selectedTime = value.split(':')
        if(+selectedTime[0] < 9 || +selectedTime[0] > 17){
            return "Work hour is 9:00Am to 6:00PM.";
        }
        if (selectedDateTime < currentDateTime) {
            return "Start time must be greater than current time.";
        }
        return true;
    };

    const validateEndTime = (endTime:string) => {
        const { startTime } = getValues();
        const startTym = new Date(`2024-01-01T${startTime}:00`);
        const endTym = new Date(`2024-01-01T${endTime}:00`);
        const differenceInMinutes = (endTym.getTime() - startTym.getTime()) / (1000 * 60);
        const sixPM = new Date('2024-01-01T18:00:00').getTime();
        
        if(differenceInMinutes < 30) {
            return 'minimum 30min gap.';
          }
        if (endTym.getTime() >= sixPM) {
            return 'Work hour is 9:00Am to 6:00PM.';
        }
        return true
    }

    const handleBooking: SubmitHandler<IBookingData> = async (data) => {
        const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY || '');
        data.serviceId = serviceId;
        data.location = location;
        const response = await advanceBookingPaymentAPI(data);
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
    };

    return (
        <>
            <section className='max-w-5xl mx-auto my-6 font-Montserrat px-3'>
                <h1 className=' font-bold tracking-wide text-4xl text-center'>Booking</h1>
                <p className='text-center my-5 md:text-sm text-xs   text-[#414141d8]'>Select and book our free available slots; if a worker is available at your chosen time, they will be assigned to you. If not, your request will be automatically canceled after one hour.</p>
            </section>

            <section className='max-w-6xl mx-auto my-16 font-Montserrat'>
                <form className='w-full flex md:flex-row flex-col justify-center gap-6' onSubmit={handleSubmit(handleBooking)}>
                    <div className='md:w-8/12 px-4'>
                        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 ">
                            <div>
                                <label htmlFor="buildName" className="block mb-1 text-sm font-semibold text-gray-900">Build / House Name <span className='text-red-600'>*</span></label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="build / house"
                                    {...register("buildingName", {
                                        required: "Build / house name is required.",
                                        validate: createRequiredValidator("build / house name"),
                                    })}
                                />
                                {errors.buildingName && (<p className="mx-3 mt-0.5 text-red-500 text-xs">* {errors.buildingName.message?.toString()}</p>)}
                            </div>

                            <div>
                                <label htmlFor="date" className="block mb-1 text-sm font-semibold text-gray-900">Date <span className='text-red-600'>*</span></label>
                                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="build / house"
                                    {...register("date", {
                                        required: "Date is required.",
                                        validate: {
                                            validDate: value => validateDate(value) || "Don't select previous days."
                                        }
                                    })}
                                />
                                {errors.date && (<p className="mx-3 mt-0.5 text-red-500 text-xs">* {errors.date.message?.toString()}</p>)}
                            </div>
                            <div>
                                <label htmlFor="startTime" className="block mb-1 text-sm font-semibold text-gray-900">Start Time <span className='text-red-600'>*</span></label>
                                <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("startTime", {
                                        required: "Start time is required.",
                                        validate: {
                                            validStartTime: value => validateStartTime(value) || "Start time must be greater than current time."
                                        }
                                    })}
                                />
                                {errors.startTime && (<p className="mx-3 mt-0.5 text-red-500 text-xs">* {errors.startTime.message?.toString()}</p>)}
                            </div>
                            <div>
                                <label htmlFor="endTime" className="block mb-1 text-sm font-semibold text-gray-900">End Time <span className='text-red-600'>*</span></label>
                                <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("endTime", {
                                        required: "End time is required.",
                                        validate: {
                                            validEndTime: value => validateEndTime(value) || "minimum 30min gap required."
                                        }
                                    })}
                                />
                                {errors.endTime && (<p className="mx-3 mt-0.5 text-red-500 text-xs">* {errors.endTime.message?.toString()}</p>)}
                            </div>
                            {/* <div>
                                <label htmlFor="landmark" className="block mb-1 text-sm font-semibold text-gray-900">Landmark</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='landmark' />
                            </div>
                            <div>
                                <label htmlFor="alternateNumber" className="block mb-1 text-sm font-semibold text-gray-900">Alternate Number</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="alternate number" />
                            </div> */}
                        </div>

                        <label htmlFor="message" className="block mt-4 mb-2 text-sm font-semibold text-gray-900">Description</label>
                        <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your issue here..."
                            {...register("description", {
                                required: "write our issue.",
                            })}
                        />
                        {errors.description && (<p className="mx-3 mt-0.5 text-red-500 text-xs"> * {errors.description.message?.toString()}</p>)}
                    </div>
                    <svg className='w-10 h-[21rem] md:block hidden' viewBox="0 0 12 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667ZM6 395.667C3.05448 395.667 0.666667 398.054 0.666667 401C0.666667 403.946 3.05448 406.333 6 406.333C8.94552 406.333 11.3333 403.946 11.3333 401C11.3333 398.054 8.94552 395.667 6 395.667ZM5 6L5 401H7L7 6H5Z" fill="#CABFBF" />
                    </svg>
                    <div className='md:w-4/12 mx-4 border-2 py-5 rounded-md '>
                        <PaymentSummary serviceId={serviceId || ''} />
                        <div className='flex justify-center items-center px-5'>
                            <button type='submit' className='bg-[#1c1e5f] w-full  rounded-md py-1  text-white' >Book Service</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default BookingLastProcedure;
