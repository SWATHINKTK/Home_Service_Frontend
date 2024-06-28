import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IMessage } from "../../@types/message";
const BASE_URL = process.env.BASE_API_URL;

export const createConversationAPI = async(senderId:string, receiverId:string) => {
    try {
        const response = await axios.post(`${BASE_URL}/chat/conversation`,{senderId, receiverId});
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }

}


export const viewMessageAPI = async(conversationId:string) => {
    try {
        const response = await axios.get(`${BASE_URL}/chat/${conversationId}/viewMessage`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}

export const sendMessageAPI = async(messageData:IMessage) => {
    try {
        const response = await axios.post(`${BASE_URL}/chat/createMessage`,messageData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}



export const viewReceiverAPI = async(receiverId:string, user:boolean) => {
    try {
        let response;
        if(user){
            response = await axios.get(`${BASE_URL}/chat/user/${receiverId}`);
        }else{
            response = await axios.get(`${BASE_URL}/chat/worker/${receiverId}`);
        }
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}