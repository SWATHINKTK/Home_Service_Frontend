import React, { useEffect, useState } from 'react';
import { BsHourglassSplit } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";




import { IBillingInfo, IBooking, WorkStatus } from '../../../@types/booking';
import { IService } from '../../../@types/service';
import axios from 'axios';
import OTPInputComponent from './OTPInputComponent';
import BillingDetails from './BillingDetails';
import { IUser } from '../../../@types/user';
import { useNavigate } from 'react-router-dom';




interface BookingViewSectionProps {
    bookedService: IBooking;
    isExpanded: boolean;
    onExpandToggle: () => void;
    handleCommitWork: () => void;
    handleStartWork: () => void;
    handleVerification: (otp: string, setError: React.Dispatch<React.SetStateAction<string>>) => void;
    handleCompleted: (additionalCharges: IBillingInfo[]) => void;
    handleCancelBooking: () => void;
}

const statusIcon: { [key: string]: JSX.Element } = {
    Pending: <BsHourglassSplit />,
    Accepted: <BsCheckAll size={20} />,
    Completed: <GiCheckMark />
}


const BookingCard: React.FC<BookingViewSectionProps> = ({ bookedService, isExpanded, onExpandToggle, handleCommitWork, handleStartWork, handleVerification, handleCompleted, handleCancelBooking }) => {
    const workStatusIcon = bookedService.workStatus ? statusIcon[bookedService.workStatus] : null;

    const [placeDetails, setPlaceDetails] = useState([]);
    const [otp, setOTP] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    console.log(2)

    useEffect(() => {
        (async () => {
            const latitude = bookedService.location.latitude;
            const longitude = bookedService.location.longitude;
            console.log(latitude, longitude)
            const details = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN}`);
            setPlaceDetails(details.data.features[0].place_name.split(','))
        })();
    }, [bookedService.location.latitude, bookedService.location.longitude]);


    const handleChat = () => {
        const data = {
            senderId: bookedService.workerId as string,
            receiverId: (bookedService.userId as IUser)._id
        }
        navigate(`/worker/profile/chat/${bookedService._id}`, { state: { data } })
    }



    return (
        <section className={`bg-[#F2F2F2] md:p-4 p-2 mx-2 my-3 shadow-md rounded-md font-Montserrat ${isExpanded && 'row-span-2'}`}>
            {bookedService.workStatus != WorkStatus.IN_PROGRESS && <>
                <div className='flex justify-between items-center text-[#252525e4] md:text-sm text-xs'>
                    <div>
                        <h6 className='font-semibold'>Booking Id : <span>{bookedService.bookingId}</span></h6>
                        <h6 className='font-medium'>Date : <span>{bookedService.date}</span></h6>
                    </div>
                    <div className='border bg-white rounded-md py-1 px-4'>
                        <div className={`flex items-center justify-center ${bookedService.workStatus == 'Pending' || bookedService.workStatus == 'Cancelled' ? 'text-red-800' : 'text-[#192963]'}`}>
                            {workStatusIcon}
                            <h6 className='text-sm font-bold mx-1'>{bookedService.workStatus}</h6>
                        </div>
                    </div>
                </div>

                <hr className=' my-2 border-[#b8b8b8]' />

                {/* Booking Information View Section */}
                <div className='flex my-4'>
                    <img src={(bookedService.serviceId as IService).image} className='w-[8.5rem] h-[8.5rem]  rounded-lg object-cover' alt="" />
                    <div className='w-full  px-2.5 '>
                        <h3 className='font-semibold md:text-lg text-[0.9rem]'>{(bookedService.serviceId as IService).serviceName}</h3>
                        <div className='mt-1'>
                            <h6 className='font- text-xs text-[#090808d4]'>Build/House Details:</h6>
                            <h6 className='font-semibold text-sm text-green-950'>{bookedService.buildingName},{placeDetails[2]}</h6>
                            <h6 className='font-semibold text-xs text-green-950'>{placeDetails[3]}</h6>
                            <h6 className='font-semibold text-xs text-green-950'>{placeDetails[4]}</h6>
                            <h6 className='font-semibold text-xs text-green-950'>{placeDetails[1]}</h6>
                        </div>
                        <div className='mt-1 max-w-40'>
                            <h6 className='font-bold lg:text-sm bg-[#0d0456] text-center text-white rounded-lg px-1'>{bookedService.startTime}AM<span className='lg:px-2 px-1'>-</span>{bookedService.endTime}AM</h6>
                        </div>
                    </div>
                </div>

                <div className='mt-1 px-2 py-1 w-full bg-white rounded-md shadow-sm'>
                    <p className='text-sm font-semibold text-[#242156]'>{bookedService.description}</p>
                </div>

                <BillingDetails isViewMore={isExpanded} booking={bookedService} handleComplete={handleCompleted} />

                <div className='flex justify-between'>
                    {bookedService.workStatus == 'Pending' &&
                        <button className='bg-[#E0F4FF] drop-shadow-sm px-4 py-1 rounded-md mt-3 flex items-center' onClick={handleCommitWork}>
                            <BsCheckAll />
                            <h5 className='text-sm font-bold mx-1'>Accept</h5>
                        </button>
                    }
                    {bookedService.workStatus !== 'Pending' && bookedService.workStatus !== 'Completed' && bookedService.workStatus !== 'Cancelled' &&
                        <button className='bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md mt-3' onClick={handleCancelBooking} >Cancel</button>
                    }
                    {bookedService.workStatus == 'Accepted' &&
                        <button className='bg-[#10A891] text-center rounded-sm py-1 px-3 mt-3' onClick={handleStartWork}>
                            <h5 className='text-sm font-bold mx-1 flex items-center gap-2'><IoMdCheckmarkCircleOutline size={20} />Start Work</h5>
                        </button>
                    }
                    {bookedService.workStatus != 'Pending' && bookedService.workStatus !== 'Completed' && bookedService.workStatus !== 'Cancelled' && (
                        <button className='bg-white px-4 py-1 rounded-md mt-3 flex items-center' onClick={handleChat}>
                            <BsChatText />
                            <h5 className='text-sm font-bold mx-1'>Chat</h5>
                        </button>
                    )}
                </div>
                {bookedService.cancelReason &&
                    <div className='p-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50'>
                        <span className='font-semibold'>Cancelled: </span> <span>{bookedService.cancelReason }</span>
                    </div>
                }



                {(bookedService.workStatus == 'Started' || bookedService.workStatus == 'Completed') && (
                    <>
                        <div className="flex justify-center m">
                            <button className="flex items-center mt-3 transition-transform transform hover:scale-105 gap-2 font-Montserrat text-xs font-bold text-center  text-gray-900  select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
                                onClick={onExpandToggle}
                            >
                                {!isExpanded ? 'View More' : 'View Less'}
                                <IoIosArrowDown className={`${isExpanded && 'rotate-180'}`} />
                            </button>
                        </div>
                        {/* <BillingDetails isViewMore={isExpanded} /> */}
                    </>
                )}
            </>}
            {bookedService.workStatus == WorkStatus.IN_PROGRESS &&
                <div className='flex flex-col justify-center items-center h-[100%] py-6'>
                    <form onSubmit={(e) => { e.preventDefault(); handleVerification(otp, setError) }}>
                        <h4 className='text-2xl mb-7 font-bold text-[#2a2066] text-center'>Verify Work</h4>
                        <OTPInputComponent otp={otp} setOTP={setOTP} error={error} setError={setError} />
                        <button className='gradient-btn my-3 w-full font-Montserrat'>Verify</button>
                    </form>
                </div>
            }
        </section>
    )
}

export default BookingCard;
