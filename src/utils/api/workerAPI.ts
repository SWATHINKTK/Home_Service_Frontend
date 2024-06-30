import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import workerAxiosInstance from './instances/workerInstance';
import { IBillingInfo } from "../../@types/booking";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const workerRegisterAPI = async (registerData: unknown) => {
    try {
        const response = await axios.post(`${BASE_URL}/worker/register`, registerData);
        return response.data
    } catch (error) {
        console.log(error)
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error;
        }
        toast.error('Something went wrong try again.')
    }
}

export const workerLoginApi = async (workerCredentials: { phoneNumber: string, password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/worker/login`, workerCredentials);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        throw error;
    }
};

export const workerLogOutAPI = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/worker/logout`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('something went wrong.')
    }
};


export const workerProfileAPI = async () => {
    try {
        const response = await workerAxiosInstance.get('/worker/profile');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const workerProfileUpdateAPI = async (workerUpdateData: FormData) => {
    try {
        const response = await workerAxiosInstance.put('/worker/editProfile', workerUpdateData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const allBookingViewOnWorkerAPI = async (page: number) => {
    try {
        const response = await workerAxiosInstance.get(`/worker/booking?page=${page}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const acceptWorkAPI = async (bookingData: { bookingId: string }) => {
    try {
        const response = await workerAxiosInstance.patch('/worker/booking/acceptWork', bookingData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const viewAcceptedWorkAPI = async (page: number) => {
    try {
        const response = await workerAxiosInstance.get(`/worker/booking/viewAcceptWork?page=${page}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}




export const startWorkAPI = async (bookingData: { bookingId: string, userEmail: string }) => {
    try {
        const response = await workerAxiosInstance.patch('/worker/booking/startWork', bookingData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const workVerificationAPI = async (verificationData: { bookingId: string, otp: string }) => {
    try {
        const response = await workerAxiosInstance.post('/worker/booking/startWork/verification', verificationData);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const completedWorkAPI = async (completeData: { bookingId: string, additionalCharges: IBillingInfo[] }) => {
    try {
        const response = await workerAxiosInstance.patch('/worker/booking/completeWork', completeData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const workHistoryAPI = async (page: number) => {
    try {
        const response = await workerAxiosInstance.get(`/worker/history?page=${page}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}