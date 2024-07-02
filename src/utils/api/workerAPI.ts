import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import workerAxiosInstance from './instances/workerInstance';
import { IBillingInfo } from "../../@types/booking";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

/**
 * Registers a worker by sending a POST request to the specified API endpoint.
 * @param {unknown} registerData - The data to be sent in the request body.
 * @returns {Promise} A promise that resolves to the response data if successful.
 * @throws {AxiosError} If the request fails and there is a response from the server.
 */
export const workerRegisterAPI = async (registerData: unknown) => {
    try {
        const response = await axios.post(`${BASE_URL}/worker/register`, registerData, { withCredentials:true });
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



/**
 * Makes an asynchronous POST request to the worker login API endpoint with the provided worker credentials.
 * @param {Object} workerCredentials - An object containing the worker's phone number and password.
 * @param {string} workerCredentials.phoneNumber - The phone number of the worker.
 * @param {string} workerCredentials.password - The password of the worker.
 * @returns {Promise} A promise that resolves to the data returned by the API upon successful login.
 * @throws {Error} If there is an error during the API call or if the response contains an error message.
 */
export const workerLoginApi = async (workerCredentials: { phoneNumber: string, password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/worker/login`, workerCredentials, { withCredentials:true });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        throw error;
    }
};



/**
 * Logs out the worker by sending a POST request to the logout endpoint.
 * @returns {Promise<any>} A promise that resolves with the data returned from the server upon successful logout.
 * @throws {AxiosError} If an error occurs during the POST request, it catches the error and displays an error message.
 */
export const workerLogOutAPI = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/worker/logout`, { withCredentials:true });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('something went wrong.')
    }
};


/**
 * Makes an asynchronous request to the worker profile API endpoint to fetch worker profile data.
 * @returns {Promise} A promise that resolves with the worker profile data if the request is successful.
 * @throws {Error} If an error occurs during the API request, it will be thrown.
 */
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


/**
 * Updates a worker's profile using the provided FormData.
 * @param {FormData} workerUpdateData - The data to update the worker's profile with.
 * @returns The updated worker profile data.
 * @throws {AxiosError} If an error occurs during the API call.
 */
export const workerProfileUpdateAPI = async (workerUpdateData: FormData) => {
    try {
        const response = await workerAxiosInstance.put('/worker/editProfile', workerUpdateData, { 
            headers: {
                'Content-Type': 'multipart/form-data'
            }});
            
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}



/**
 * Fetches all booking views from the worker API based on the specified page number.
 * @param {number} page - The page number to fetch booking views from.
 * @returns {Promise} A promise that resolves to the data of the booking views fetched.
 * @throws {Error} If there is an error during the API call or if the response contains errors.
 */
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



/**
 * Sends a PATCH request to the server to accept work for a given booking ID.
 * @param {Object} bookingData - An object containing the booking ID to accept work for.
 * @param {string} bookingData.bookingId - The ID of the booking to accept work for.
 * @returns {Promise} A promise that resolves to the data returned from the server upon successful acceptance of work.
 * @throws {Error} If there is an error during the API call, it throws the error.
 */
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


/**
 * Cancels a work booking by sending a PATCH request to the worker API.
 * @param {Object} bookingData - The data needed to cancel the work booking, including bookingId and reason.
 * @returns {Promise} A promise that resolves to the response data if successful.
 * @throws {Error} If an error occurs during the cancellation process.
 */
export const cancelWorkAPI = async (bookingData: { bookingId: string, reason:string }) => {
    try {
        const response = await workerAxiosInstance.patch('/worker/booking/cancelWork', bookingData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


/**
 * Fetches accepted work data from the server based on the provided page number.
 * @param {number} page - The page number to fetch the accepted work data for.
 * @returns {Promise} A promise that resolves to the accepted work data.
 * @throws {Error} If there is an error during the API call or if the response contains an error message.
 */
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



/**
 * Initiates the start of work for a booking by sending a PATCH request to the worker API.
 * @param {Object} bookingData - An object containing the booking ID and user email.
 * @param {string} bookingData.bookingId - The ID of the booking to start work on.
 * @param {string} bookingData.userEmail - The email of the user associated with the booking.
 * @returns {Promise} A promise that resolves to the data returned from the API.
 * @throws {Error} If an error occurs during the API request, it will be thrown.
 */
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


/**
 * Calls the work verification API to verify the booking ID and OTP for starting work.
 * @param {Object} verificationData - An object containing the booking ID and OTP for verification.
 * @param {string} verificationData.bookingId - The booking ID to verify.
 * @param {string} verificationData.otp - The OTP (One Time Password) for verification.
 * @returns {Promise} A promise that resolves with the response data if successful, or rejects with an error.
 */
export const workVerificationAPI = async (verificationData: { bookingId: string, otp: string }) => {
    try {
        const response = await workerAxiosInstance.post('/worker/booking/startWork/verification', verificationData);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}


/**
 * Makes an asynchronous call to mark a work as completed in the API.
 * @param {Object} completeData - An object containing the booking ID and additional charges.
 * @param {string} completeData.bookingId - The ID of the booking to mark as completed.
 * @param {IBillingInfo[]} completeData.additionalCharges - An array of additional charges for the booking.
 * @returns {Promise} A promise that resolves to the response data from the API.
 * @throws {Error} If an error occurs during the API call, it throws the error.
 */
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


/**
 * Fetches the work history data for a worker from the API based on the specified page number.
 * @param {number} page - The page number of the work history data to fetch.
 * @returns {Promise} A promise that resolves with the work history data from the API.
 * @throws {Error} If there is an issue fetching the data, an error is thrown.
 */
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