import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const fetchAllServicesAPI = async () => {
    try {
        const response = await axios.get("/api/admin/service");
        return response.data
    } catch (error) {
        if (error instanceof AxiosError)
            toast.error(error.response?.data.errors[0].message);
        throw error
    }
}