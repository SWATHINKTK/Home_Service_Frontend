import React, { useEffect, useState } from 'react';
import { BsHourglassSplit } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsChatText } from "react-icons/bs";




import { IBooking } from '../../../@types/booking';
import { IService } from '../../../@types/service';
import axios from 'axios';




interface BookingViewSectionProps {
    bookedService: IBooking;
    isExpanded: boolean;
    onExpandToggle: () => void;
    handleCancelBooking: () => void;
}

const statusIcon:{ [key: string]: JSX.Element } = {
    Pending:<BsHourglassSplit />
}


const BookingCard: React.FC<BookingViewSectionProps> = ({ bookedService, isExpanded, onExpandToggle, handleCancelBooking }) => {
    const workStatusIcon = bookedService.workStatus ? statusIcon[bookedService.workStatus] : null;
    // const paymentStatusIcon = bookedService.paymentStatus ? statusIcon[bookedService.paymentStatus] : null;

    const [placeDetails, setPlaceDetails] = useState([]);
    useEffect(() => {
        (async () => {
            const latitude = bookedService.location.latitude;
            const longitude = bookedService.location.longitude;
            console.log(latitude, longitude)
            const details = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.MAP_BOX_ACCESS_TOKEN}`);
            setPlaceDetails(details.data.features[0].place_name.split(','))
        })();
    }, [bookedService.location.latitude, bookedService.location.longitude]);

    return (
        <section className={`bg-[#F2F2F2] md:p-4 p-2 mx-2 my-3 shadow-md rounded-md font-Montserrat ${isExpanded && 'row-span-2'}`}>
            <div className='flex justify-between items-center text-[#252525e4] md:text-sm text-xs'>
                <div>
                    <h6 className='font-semibold'>Booking Id : <span>{bookedService._id?.slice(0, 12)}</span></h6>
                    <h6 className='font-medium'>Date : <span>{bookedService.date}</span></h6>
                </div>
                <div className='border bg-white rounded-md py-1 px-4'>
                    <div>
                        <h6 className='text-xs font-semibold'>Work Status</h6>
                        <div className='flex items-center text-red-800'>
                            {workStatusIcon}
                            <h6 className='text-sm font-semibold mx-1'>{bookedService.workStatus}</h6>
                        </div>
                    </div>
                </div>
            </div>

            <hr className=' my-2 border-[#b8b8b8]' />

            {/* Booking Information View Section */}
            <div className='flex my-4'>
                <img src={(bookedService.serviceId as IService).image} className='w-[8.5rem] h-[9rem]  rounded-lg object-cover' alt="" />
                <div className='w-full  px-2.5 '>
                    <h3 className='font-semibold md:text-lg text-[0.9rem]'>{(bookedService.serviceId as IService).serviceName}</h3>
                    <div className='mt-1'>
                        <h6 className='font- text-xs text-[#090808d4]'>Build/House Details:</h6>
                        <h6 className='font-semibold text-sm text-green-950'>{bookedService.buildingName},{placeDetails[2]}</h6>
                        <h6 className='font-semibold text-xs text-green-950'>{placeDetails[3]}</h6>
                        <h6 className='font-semibold text-xs text-green-950'>{placeDetails[4]}</h6>
                        <h6 className='font-semibold text-xs text-green-950'>{placeDetails[1]}</h6>
                    </div>
                    <div className='mt-1 w-40'>
                        <h6 className='font-semibold text-sm bg-[#0d0456] text-center text-white rounded-lg'>{bookedService.startTime}AM <span className='px-2'>-</span> {bookedService.endTime}AM</h6>
                    </div>
                </div>
            </div>

            <div className='mt-1 px-2 py-1 w-full bg-white rounded-md shadow-sm'>
                <p className='text-sm font-semibold text-[#242156]'>{bookedService.description}</p>
            </div>

            {bookedService.workStatus !== 'Completed' && bookedService.workStatus !== 'Cancelled' &&
                (<div className='flex justify-between'>
                    <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3' onClick={handleCancelBooking} >Cancel</button>
                    {bookedService.workStatus != 'Pending' && bookedService.workStatus !== 'Completed' && (
                        <button className='bg-white px-4 py-1 rounded-md mt-3 flex items-center'>
                            <BsChatText />
                            <h5 className='text-sm font-bold mx-1'>Chat</h5>
                        </button>
                    )}
                </div>
            )}


            {bookedService.workStatus == 'Completed' && (
                <>
                    {!isExpanded &&
                        <div className="flex justify-center m">
                            <button className="flex items-center mt-3 transition-transform transform hover:scale-105 gap-2 font-Montserrat text-xs font-bold text-center  text-gray-900  select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
                                onClick={onExpandToggle}
                            >
                                View More <IoIosArrowDown />
                            </button>
                        </div>
                    }
                    {/* <BillingDetails isViewMore={isExpanded} /> */}
                </>
            )}

        </section>
    )
}

export default BookingCard;
