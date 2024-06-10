import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IMessage } from "../../@types/message";

export const createConversationAPI = async(senderId:string, receiverId:string) => {
    try {
        const response = await axios.post('/api/chat/conversation',{senderId, receiverId});
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }

}


export const viewMessageAPI = async(conversationId:string) => {
    try {
        const response = await axios.get(`/api/chat/${conversationId}/viewMessage`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}

export const sendMessageAPI = async(messageData:IMessage) => {
    try {
        const response = await axios.post(`/api/chat/createMessage`,messageData);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}