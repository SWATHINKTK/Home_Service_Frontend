import axios, { AxiosError } from "axios";
import { IService } from "../../components/Admin/Services/ServiceTable";
import { toast } from "react-toastify";
import { IAdminData } from "../../@types/admin";
import adminInstance from './instances/adminInstance';
const BASE_URL = import.meta.env.VITE_BASE_API_URL;


/**
 * Authenticates an admin user by sending a POST request to the admin login endpoint with the provided credentials.
 * @param {IAdminData} adminCredentials - The admin credentials object containing username and password.
 * @returns {Promise<any>} A promise that resolves to the response data upon successful authentication.
 * @throws {AxiosError} If an error occurs during the API call, it handles the error response and displays an error message.
 */
export const adminAuthAPI = async(adminCredentials:IAdminData) => {
    try {
        const response = await axios.post(`${BASE_URL}/admin/login`, adminCredentials, { withCredentials:true });
        return response.data
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error;
        }
        toast.error('Something went wrong.try again.')
    }
}



/**
 * Edits a service using the provided service data.
 * @param {IService} editServiceData - The data of the service to be edited.
 * @returns {Promise<any>} A promise that resolves to the edited service data.
 * @throws {Error} If an error occurs during the editing process.
 */
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



/**
 * Blocks a service using the service ID.
 * @param {string} serviceId - The ID of the service to block.
 * @returns {Promise} A promise that resolves with the response data if successful, 
 * and rejects with an error message if there is an error.
 */
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



/**
 * Fetches all worker API data based on the page number and status provided.
 * @param {number} pageNumber - The page number of the worker data to fetch.
 * @param {boolean} status - The status of the worker data to fetch.
 * @returns {Promise} A promise that resolves to the data fetched from the API.
 * @throws {AxiosError} If there is an error with the API request, it will throw an AxiosError.
 */
export const fetchAllWorkerAPI = async(pageNumber:number, status:boolean) => {
    try {
        const response = await adminInstance.get(`/admin/worker/${status}?pageNumber=${pageNumber}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
        toast.error("Server error")
    }
}



/**
 * Fetches extra information about a worker from the API using the provided worker ID.
 * @param {string} workerId - The ID of the worker to fetch extra information for.
 * @returns {Promise} A promise that resolves to the extra information data of the worker.
 * @throws {AxiosError} If an error occurs during the API request, it will display an error message using toast and rethrow the error.
 */
export const fetchWorkerExtraInfoAPI = async(workerId:string) => {
    try {
        const response = await adminInstance.get(`/admin/worker/extraInformation/${workerId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
            throw error
        }
    }
}



/**
 * Blocks a worker by sending a PATCH request to the admin API.
 * @param {string} workerId - The ID of the worker to block.
 * @returns {Promise} A promise that resolves with the response data if successful.
 * @throws {Error} If an error occurs during the request, it will be thrown.
 */
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


/**
 * Verifies a worker API by sending a PATCH request to the server.
 * @param {string} workerId - The ID of the worker to verify.
 * @returns {Promise} A Promise that resolves with the data returned from the server.
 * @throws {Error} If an error occurs during the verification process.
 */
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


export const salesReportAPI = async(startDate:string, endDate:string)=> {
    try {
        const response = await adminInstance.get(`/admin/salesReport?startDate=${startDate}&endDate=${endDate}&page=${1}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}

export const salesReportDownloadAPI = async(startDate:string, endDate:string)=> {
    try {
        const response = await adminInstance.get(`/admin/salesReport/download?startDate=${startDate}&endDate=${endDate}&page=${1}`);
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


export const dashboardRecentDataFetchingAPI = async() => {
    try {
        const response = await adminInstance.get('/admin/dashboard/recentData');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}


export const dashboardChartDataFetchingAPI = async() => {
    try {
        const response = await adminInstance.get('/admin/dashboard/chart');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}

export const dashboardPerformanceDataFetchingAPI = async() => {
    try {
        const response = await adminInstance.get('/admin/dashboard/performingWorkersAndUsers');
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            toast.error(error.response.data.errors[0].message);
        }
        throw error
    }
}