/* eslint-disable no-useless-catch */
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const userLogin = async (userCredential:{username:string, password:string}) => {
    try {
        const response = await axios.post('/user/login', userCredential);
        console.log("Response will come",response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const userVerification = async (otpCredentials:{email:string, firstname:string, lastname:string}) => {
    try {
        const response = await axios.post('/user/sendOTP', otpCredentials);
        console.log("Response will come",response.data)
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error;
    }
};
