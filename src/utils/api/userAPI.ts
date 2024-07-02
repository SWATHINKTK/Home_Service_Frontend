
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../../@types/user";
import userAxiosInstance from "./instances/userInstance";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;


/**
 * Logs in a user with the provided username and password by making a POST request to the server.
 * @param {Object} userCredential - An object containing the username and password of the user.
 * @param {string} userCredential.username - The username of the user.
 * @param {string} userCredential.password - The password of the user.
 * @returns {Promise} A promise that resolves to the data returned from the server upon successful login.
 * @throws {Error} If there is an error during the login process, it is logged and rethrown.
 */
export const userLogin = async (userCredential: { username: string, password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/login`, userCredential, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};


/**
 * Makes an asynchronous POST request to the user logout API endpoint.
 * @returns {Promise} A promise that resolves to the data returned by the API.
 * @throws {Error} If an error occurs during the API call.
 */
export const userLogoutAPI = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/user/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};



/**
 * Sends a user verification OTP to the specified email address.
 * @param {Object} otpCredentials - An object containing the email, first name, and last name of the user.
 * @param {string} otpCredentials.email - The email address to send the OTP to.
 * @param {string} otpCredentials.firstname - The first name of the user.
 * @param {string} otpCredentials.lastname - The last name of the user.
 * @returns {Promise} A promise that resolves with the response data if successful, or rejects with an error.
 */
export const userVerification = async (otpCredentials: { email: string, firstname: string, lastname: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/sendOTP`, otpCredentials, { withCredentials: true });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        toast.error('Something went wrong try again.')
    }
};



/**
 * Registers a new user by sending a POST request to the server with the user's registration credentials.
 * @param {IUser} registerCredentials - The user's registration credentials.
 * @returns {Promise<any>} A promise that resolves to the response data upon successful registration.
 * @throws {Error} If an unexpected error occurs during the registration process.
 */
export const registerUser = async (registerCredentials: IUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/signup`, registerCredentials, { withCredentials: true });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        } else {
            toast.error("An unexpected error occurred. Please try again later.");
        }
        throw error;
    }
}



/**
 * Makes an asynchronous request to the user profile API endpoint to fetch user profile data.
 * @returns {Promise} A promise that resolves with the user profile data if the request is successful.
 * @throws {Error} If an error occurs during the API request.
 */
export const userProfileAPI = async () => {
    try {
        const response = await userAxiosInstance.get('/user/profile', { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log('hello error')
        throw error
    }
}



/**
 * Updates the user profile using the provided user data.
 * @param {FormData} userUpdateData - The data to update the user profile with.
 * @returns {Promise} A promise that resolves to the updated user profile data.
 * @throws {Error} If there is an error updating the user profile.
 */
export const manageUserProfileAPI = async (userUpdateData: FormData) => {
    try {
        const response = await userAxiosInstance.put('/user/editProfile', userUpdateData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}



/**
 * Calls the service list API to fetch a list of services based on the page number and search query.
 * @param {number} pageNumber - The page number of the results to fetch.
 * @param {string} search - The search query to filter the results.
 * @returns {Promise} A promise that resolves to the data fetched from the API.
 * @throws {AxiosError} If there is an error with the API request, it will display an error message.
 */
export const serviceListAPI = async (pageNumber: number, search: string) => {
    try {
        const response = await userAxiosInstance.get(`/user/service?page=${pageNumber}&search=${search}`);
        console.log(response)
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}



/**
 * Retrieves service data from the API using the provided service ID.
 * @param {string} serviceId - The ID of the service to retrieve data for.
 * @returns {Promise} A promise that resolves to the data retrieved from the API.
 * @throws {Error} If there is an error during the API call.
 */
export const serviceDataRetrieveAPI = async (serviceId: string) => {
    try {
        const response = await userAxiosInstance.get(`/user/service/details/${serviceId}`);
        return response.data;
    } catch (error) {
        console.log('hello error', error)
        throw error
    }
}


/**
 * Makes an asynchronous POST request to the '/user/booking' endpoint with the provided booking details.
 * @param {unknown} bookingDetails - The details of the booking to be sent in the request.
 * @returns {Promise<any>} A promise that resolves to the data returned from the API call.
 * @throws {AxiosError} If the request encounters an error with a response, it will display an error message.
 */
export const advanceBookingPaymentAPI = async (bookingDetails: unknown) => {
    try {
        const response = await userAxiosInstance.post('/user/booking', bookingDetails);
        return response.data;
    } catch (error) {
        console.log('error', error)
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}



/**
 * Retrieves booked data from the API based on the page number and history flag.
 * @param {number} page - The page number to retrieve data for.
 * @param {boolean} history - Flag to indicate whether to retrieve historical data.
 * @returns {Promise} A promise that resolves to the data retrieved from the API.
 * @throws {AxiosError} If there is an error with the API request, it will display an error message.
 */
export const bookedDataRetrieveAPI = async (page: number, history: boolean) => {
    try {
        const response = await userAxiosInstance.get(`/user/booking?history=${history}&page=${page}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}



/**
 * Cancels a booking for a user using the provided booking ID and status.
 * @param {Object} cancelData - An object containing the booking ID and status to cancel.
 * @param {string} cancelData.bookingId - The ID of the booking to cancel.
 * @param {string} cancelData.status - The status of the booking to set after cancellation.
 * @returns {Promise} A promise that resolves to the data returned from the API call.
 * @throws {AxiosError} If an error occurs during the API call, it will be caught and an error message will be displayed.
 */
export const cancelBookingUserAPI = async (cancelData: { bookingId: string, status: string }) => {
    try {
        const response = await userAxiosInstance.patch('/user/booking/cancel', cancelData);
        return response.data;
    } catch (error) {
        console.log('error', error)
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}



/**
 * Makes a POST request to the user payment API endpoint with the provided booking ID and service name.
 * @param {string} bookingId - The ID of the booking for payment.
 * @param {string} serviceName - The name of the service for payment.
 * @returns {Promise<any>} A promise that resolves to the response data from the API.
 * @throws {AxiosError} If there is an error with the request, it will handle and display the error message.
 */
export const paymentAPI = async (bookingId: string, serviceName: string) => {
    try {
        const response = await userAxiosInstance.post('/user/payment', { bookingId, serviceName });
        return response.data;
    } catch (error) {
        console.log('error', error)
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}
