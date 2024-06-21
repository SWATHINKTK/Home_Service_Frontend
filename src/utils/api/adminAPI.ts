import axios, { AxiosError } from "axios";
import { IService } from "../../components/Admin/Services/ServiceTable";
import { toast } from "react-toastify";
import { IAdminData } from "../../@types/admin";
import adminInstance from './instances/adminInstance';

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
        const response = await adminInstance.put('/admin/service/edit', editServiceData);
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
        const response = await adminInstance.patch(`/admin/service/${serviceId}/blockService`);
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
        const response = await adminInstance.get(`/admin/worker/${status}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error("Server error")
    }
}


export const blockWorkerAPI = async(workerId:string) => {
    try {
        const response = await adminInstance.patch(`/admin/worker/${workerId}/block`);
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
        const response = await adminInstance.patch(`/admin/worker/${workerId}/verify`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}




export const fetchServices = async (pageNumber:number, search:string) => {
    try {
        const response = await adminInstance.get(`/admin/service?page=${pageNumber}&search=${search}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError){
            toast.error(error.response?.data.errors[0].message);
        }
    }
}



export const userFetch = async () => {
    try {
        const response = await adminInstance.get("/admin/users");
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError){
            toast.error(error.response?.data.errors[0].message);
        }
    }
}


export const blockUserAPI = async (userId: string) => {
    try {
        const response = await adminInstance.patch(`/admin/${userId}/block`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const salesReportAPI = async()=> {
    try {
        const response = await adminInstance.get(`/admin/salesReport`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const bookingHistoryAPI = async(currentPage:number)=> {
    try {
        const response = await adminInstance.get(`/admin/viewBookings?page=${currentPage}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}

export const dashboardCardDataFetchAPI = async() =>{
    try {
        const response = await adminInstance.get('/admin/dashboard/totalData');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}