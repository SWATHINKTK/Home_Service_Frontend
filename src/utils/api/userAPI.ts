
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../../@types/user";
import userAxiosInstance from "./instances/userInstance";
const BASE_URL = process.env.BASE_API_URL


// ! -------------------------------- USER API CALLING FUNCTIONS IN USER SIDE -------------------------------

/**
 ** User Login Access The Application
 * @param userCredential { username, password } User credentials to login
 * @returns Promise<UserData> Promise resolving to user data upon successful login
 * @throws Error If login fails
 */
export const userLogin = async (userCredential: { username: string, password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/login`, userCredential);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};


/**
 ** Logout the current user.
 * @returns Promise<void> Promise resolving after successful logout
 * @throws Error If logout fails
 */
export const userLogoutAPI = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/user/logout`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};



/**
 * Send OTP credentials for user verification.
 * @param otpCredentials { email, firstname, lastname } OTP credentials for verification
 * @returns Promise<any> Promise resolving to response data upon successful OTP sending
 * @throws Error If OTP sending fails
 */
export const userVerification = async (otpCredentials: { email: string, firstname: string, lastname: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/sendOTP`, otpCredentials);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        toast.error('Something went wrong try again.')
    }
};


/**
 * Register a new user.
 * @param registerCredentials Registration credentials for the new user
 * @returns Promise<any> Promise resolving to response data upon successful registration
 * @throws Error If registration fails
 */
export const registerUser = async (registerCredentials: IUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/signup`, registerCredentials);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }else {
            toast.error("An unexpected error occurred. Please try again later.");
        }
        throw error;
    }
}




/**
 ** Retrieve the user's profile data.
 * @returns Promise<any> Promise resolving to user profile data
 * @throws Error If retrieval fails
 */
export const userProfileAPI = async () => {
    try {
        console.log('API')
        const response = await userAxiosInstance.get('/user/profile', { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log('hello error')
        throw error
    }
}


/**
 ** Update the user's profile data.
 * @param userUpdateData The data to update the user's profile
 * @returns Promise<any> Promise resolving to response data upon successful update
 * @throws Error If update fails
 */
export const manageUserProfileAPI = async (userUpdateData: FormData) => {
    try {
        const response = await axios.put('/api/user/editProfile', userUpdateData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


/**
 ** Fetch a list of services.
 * @returns Promise<any[]> Promise resolving to an array of services
 * @throws Error If retrieval fails
 */
export const serviceListAPI = async (pageNumber:number, search:string) => {
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
 ** Retrieve the Specified Service Data.
 * @returns Promise<any> Promise resolving to service data
 * @throws Error If retrieval fails
 */
 export const serviceDataRetrieveAPI = async (serviceId:string) => {
    try {
        const response = await userAxiosInstance.get(`/user/service/details/${serviceId}`);
        return response.data;
    } catch (error) {
        console.log('hello error',error)
        throw error
    }
}

export const advanceBookingPaymentAPI = async (bookingDetails:unknown) => {
    try {
        const response = await userAxiosInstance.post('/user/booking',bookingDetails);
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

export const bookedDataRetrieveAPI = async(page:number, history:boolean) => {
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

export const cancelBookingUserAPI = async (cancelData:{bookingId:string, status:string}) => {
    try {
        const response = await userAxiosInstance.patch('/user/booking/cancel',cancelData);
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



export const paymentAPI = async (bookingId:string, serviceName:string) => {
    try {
        const response = await userAxiosInstance.post('/user/payment',{bookingId, serviceName});
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


// !-------------------------------------- ADMIN SIDE USER APIS ----------------------------------------------
