
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../../@types/user";
import  userAxiosInstance  from './instances/userInstance';


// ! -------------------------------- USER API CALLING FUNCTIONS IN USER SIDE -------------------------------

/**
 ** User Login Access The Application
 * @param userCredential { username, password } User credentials to login
 * @returns Promise<UserData> Promise resolving to user data upon successful login
 * @throws Error If login fails
 */
export const userLogin = async (userCredential: { username: string, password: string }) => {
    try {
        const response = await axios.post('/api/user/login', userCredential);
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
        const response = await axios.post('/api/user/logout');
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
        const response = await axios.post('/api/user/sendOTP', otpCredentials);
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
        // if (!registerCredentials.email || !registerCredentials.password || !registerCredentials.firstname || !registerCredentials.lastname) {
        //     throw new Error("Email, password, firstname, and lastname are required.");
        // }
        const response = await axios.post('/api/user/signup', registerCredentials);
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
export const serviceListAPI = async (pageNumber:number) => {
    try {
        const response = await axios.get(`/api/user/service?page=${pageNumber}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error('server Error please try again.')
    }
}





// !-------------------------------------- ADMIN SIDE USER APIS ----------------------------------------------

/**
 ** Block a user by their ID In The Admin Side.
 * @param userId The ID of the user to be blocked
 * @returns Promise<any> Promise resolving to response data upon successful blocking
 * @throws Error If blocking fails
 */
 export const blockUserAPI = async (userId: string) => {
    // if (!userId || typeof userId !== 'string') {
    //     throw new Error("Invalid user ID.");
    // }
    try {
        const response = await axios.patch(`/api/admin/${userId}/block`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}