/* eslint-disable no-useless-catch */
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../../@types/user";

export const userLogin = async (userCredential:{username:string, password:string}) => {
    try {
        const response = await axios.post('/user/login', userCredential);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const userVerification = async (otpCredentials:{email:string, firstname:string, lastname:string}) => {
    try {
        const response = await axios.post('/user/sendOTP', otpCredentials);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error;
    }
};


export const registerUser = async (registerCredentials:IUser) => {
    try {
        const response = await axios.post('/user/signup',registerCredentials);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error;
    }
}