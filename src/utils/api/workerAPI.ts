import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import axiosInstance from './instances/workerInstance';

export const workerRegisterAPI = async(registerData:unknown) => {
    try {
        const response = await axios.post('/api/worker/register', registerData);
        return response.data
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        toast.error('Something went wrong try again.')
    }
}

export const workerLoginApi = async(workerCredentials: { phoneNumber: string, password: string }) => {
   try {
        const response = await axios.post('/api/worker/login',workerCredentials);
        return response.data;
   } catch (error) {
        console.log("error",error)
        throw error;
   }
};

export const workerLogOutAPI = async() => {
    try {
         const response = await axios.post('/api/worker/logout');
         return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('something went wrong.')
    }
 };


export const workerProfileAPI = async() => {
    try {
        const response = await axiosInstance.get('/profile');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const workerProfileUpdateAPI = async(workerUpdateData:FormData) => {
    try {
        const response = await axios.put('/api/worker/editProfile',workerUpdateData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const allBookingViewOnWorkerAPI = async() => {
    try {
        const response = await axiosInstance.get('/booking');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const acceptWorkAPI = async(bookingData:{bookingId:string}) => {
    try {
        const response = await axiosInstance.patch('/booking/acceptWork', bookingData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}