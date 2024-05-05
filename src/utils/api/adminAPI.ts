import axios, { AxiosError } from "axios";
import { IService } from "../../components/admin/tables/ServiceTable";
import { toast } from "react-toastify";

export const editServiceAPI = async(editServiceData:IService) => {
    try {
        const response = await axios.put('/api/admin/service/edit', editServiceData);
        return response.data;
    } catch(error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error;
    }
}