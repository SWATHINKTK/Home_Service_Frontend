import axios, { AxiosError } from "axios";
import { IService } from "../../components/admin/tables/ServiceTable";
import { toast } from "react-toastify";
import { IAdminData } from "../../@types/admin";

export const adminAuthAPI = async(adminCredentials:IAdminData) => {
    try {
        const response = await axios.post('/api/admin/login', adminCredentials);
        return response.data
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error;
        }
        toast.error('Somethig went wrong.try again.')
    }
}

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

export const blockServiceAPI = async(serviceId:string) => {
    try {
        const response = await axios.patch(`/api/admin/service/${serviceId}/blockService`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        toast.error("Server error")
    }
}


export const fetchAllWorkerAPI = async(status:boolean) => {
    try {
        const response = await axios.get(`/api/admin/worker/${status}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        toast.error("Server error")
    }
}


export const blockWorkerAPI = async(workerId:string) => {
    try {
        const response = await axios.patch(`/api/admin/worker/${workerId}/block`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}

export const verifyWorkerAPI = async (workerId: string) => {
    try {
        const response = await axios.patch(`/api/admin/worker/${workerId}/verify`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}