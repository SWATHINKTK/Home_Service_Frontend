import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const fetchAllServicesAPI = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/admin/service`);
        return response.data
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}