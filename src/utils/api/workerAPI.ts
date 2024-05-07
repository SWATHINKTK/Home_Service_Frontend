import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const workerRegisterAPI = async(registerData:unknown) => {
    try {
        const response = await axios.post('/api/worker/register', registerData);
        return response.data
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        toast.error('Something went wrong try again.')
    }
}