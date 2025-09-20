import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import LocationSelecting from '../LocationFetchig/LocationSelecting'
import { useAppSelector } from '../../../hooks/useTypedSelector';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { mobileNumberRegex } from '../../../constants/regex';
import { IAddress } from '../../../@types/checkout';
import { createNewAddressAPI, viewAllAddressAPI } from '../../../utils/api/userAPI';
import { toast } from 'react-hot-toast';

interface IAddressSelectingProps {
    setBookingAddress: React.Dispatch<React.SetStateAction<Partial<IAddress>>>;
    modalClose: () => void;
}




const AddressSelecting: React.FC<IAddressSelectingProps> = ({ setBookingAddress, modalClose }) => {
    const { latitude, longitude } = useAppSelector((state) => state.location);
    const [locationDetails, setLocationDetails] = useState<string[]>([]);
    const [address, setAddress] = useState<IAddress[]>([]);
    const [isAddAddress, setIsAddAddress] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IAddress>();

    const fetchLocationDetails = useCallback(async (longitude: number, latitude: number) => {
        try {
            const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN}`);
            if (response.data.features.length > 0) {
                const context = response.data.features[0].context || [];
                const extracted = Object.fromEntries(
                    context.map((c: { id: string; text: string; }) => [c.id.split(".")[0], c.text])
                );
                return [
                    extracted.locality, // locality
                    extracted.place,    // city
                    extracted.district, // district
                    extracted.region,   // state
                    extracted.country   // country
                ].filter(Boolean);

            }
        } catch (error) {
            console.error("Failed to fetch location details:", error);
            throw error;
        }
    }, []);

    useEffect(() => {
        (async () => {
            const location = await fetchLocationDetails(longitude, latitude);
            if (location)
                setLocationDetails(location);
            const allAddress = await viewAllAddressAPI();
            setAddress(allAddress.data)

        })();
    }, [fetchLocationDetails, latitude, longitude]);

    const handlingAddress = async (data: IAddress) => {
        try {
            data.location = {
                coordinates: [longitude, latitude],
            }
            data.locationDetails = locationDetails.join(',');
            console.log("Address Data:", data);
            const newAddress = await createNewAddressAPI(data);
            console.log("New Address Response:", newAddress);
            toast.success('New Address Creation Successful.')
            setAddress([...address, newAddress.data]);
            setIsAddAddress(false);
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectingAddress = (index: number) => {
        setBookingAddress(address[index]);
        modalClose();
    }

    if (isAddAddress) {
        return (
            <div className='md:w-[60vw] w-[90vw] md:flex h-[80vh] overflow-y-auto font-Montserrat'>
                <div className="w-full md:h-auto h-[30vh]">
                    <LocationSelecting />
                </div>
                <div className='w-full md:p-5 px-3 py-5'>
                    <h2 className='font-semibold text-lg'>Add Address</h2>
                    <form className='mt-2' onSubmit={handleSubmit(handlingAddress)}>
                        <input type="text"
                            className='bg-[#f0f2f5] w-full outline-none border drop-shadow-sm rounded-md p-1 px-3'
                            placeholder='Building name / House name'
                            {...register("buildingName", {
                                required: "building name is required.",
                            })}
                        />
                        {errors.buildingName && <p className='text-red-500 text-xs mx-2'>*{errors.buildingName.message?.toString()}</p>}
                        <input className='bg-[#f0f2f5] w-full outline-none border drop-shadow-sm rounded-md p-1 px-3 my-4' type="text" placeholder='Locality' value={locationDetails[0]} />
                        <input className='bg-[#f0f2f5] w-full outline-none border drop-shadow-sm rounded-md p-1 px-3 mb-4' type="text" placeholder='City' value={locationDetails[1]} />
                        <input className='bg-[#f0f2f5] w-full outline-none border drop-shadow-sm rounded-md p-1 px-3 mb-4' type="text" placeholder='District' value={locationDetails[2]} />
                        <input className='bg-[#f0f2f5] w-full outline-none border drop-shadow-sm rounded-md p-1 px-3 mb-4' type="text" placeholder='Pincode' value={locationDetails[3]} />
                        <input type="text"
                            className='bg-[#f0f2f5] w-full outline-none border drop-shadow-sm rounded-md p-1 px-3'
                            placeholder='Phone number'
                            {...register("phoneNumber", {
                                required: "phone number is required.",
                                pattern: {
                                    value: mobileNumberRegex,
                                    message:
                                        "invalid mobile number format.It should consist of 10 digits.",
                                },
                            })}
                        />
                        {errors.phoneNumber && <p className='text-red-500 text-xs mx-2'>*{errors.phoneNumber.message?.toString()}</p>}
                        <button className='py-0.5 px-5 rounded-md bg-black text-white my-3 '>Add</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className='md:w-[60vw] w-[90vw] md:flex h-[80vh] overflow-y-auto font-Montserrat'>
            <div className="w-full md:h-auto h-[30vh]">
                <LocationSelecting />
            </div>
            <div className='w-full md:p-5 px-3 py-5'>
                <h2 className='font-semibold text-lg'>Select Address</h2>
                <div className='mx-auto rounded-md border'>
                    {address.map((data, index) => (
                        <div key={index} className='border-b py-1 px-2 flex flex-col justify-center '>
                            <div className='flex'>
                                <div className='flex justify-center items-center px-1'>
                                    <input type="radio" className='size-4' name='address' onClick={() => handleSelectingAddress(index)} />
                                </div>
                                <div className='mx-2 overflow-hidden'>
                                    <h4 className='font-semibold text-sm'>{data.buildingName}</h4>
                                    <p className='break-words'>{data.locationDetails}</p>
                                    <p className='break-words'>{data.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='border w-full rounded-md my-4 py-1 px-2 flex items-center gap-3' onClick={() => setIsAddAddress(true)}>
                    <FaPlus />
                    <h2>Add Address</h2>
                </button>
            </div>
        </div>
    )
}

export default AddressSelecting
