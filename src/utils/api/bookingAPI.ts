import { AxiosError } from 'axios';
import axiosInstance from './instances/userInstance';
import { toast } from 'react-toastify';

export const advanceBookingPaymentAPI = async (bookingDetails:unknown) => {
    try {
        const response = await axiosInstance.post('/user/booking',bookingDetails);
        return response.data;
    } catch (error) {
        console.log('error',error)
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}





