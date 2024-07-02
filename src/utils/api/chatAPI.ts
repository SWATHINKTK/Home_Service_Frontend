import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IMessage } from "../../@types/message";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

/**
 * Creates a conversation API between two users with the given sender and receiver IDs.
 * @param {string} senderId - The ID of the sender user.
 * @param {string} receiverId - The ID of the receiver user.
 * @returns {Promise} A promise that resolves to the data of the conversation API response.
 * @throws {Error} If there is an error during the API call, it throws the error.
 */
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



/**
 * Fetches the messages of a conversation from the server using the conversation ID.
 * @param {string} conversationId - The ID of the conversation to fetch messages for.
 * @returns {Promise} A promise that resolves with the data of the fetched messages.
 * @throws {Error} If there is an issue fetching the messages.
 */
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


/**
 * Sends a message using the sendMessageAPI endpoint.
 * @param {IMessage} messageData - The message data to be sent.
 * @returns The response data from the API call.
 * @throws {AxiosError} If there is an error in the API call, displays an error message using toast and throws the error.
 */
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



/**
 * Fetches the receiver API data based on the receiver ID and user type.
 * @param {string} receiverId - The ID of the receiver to fetch data for.
 * @param {boolean} user - A boolean flag indicating if the receiver is a user.
 * @returns {Promise} A promise that resolves with the data from the API response.
 * @throws {Error} If there is an error during the API call, it will be thrown.
 */
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