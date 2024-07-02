import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;



// Create a new instance of axios with the given baseURL and headers
const workerAxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


// Interceptor for outgoing requests
workerAxiosInstance.interceptors.request.use(request => {
    // Return the request
    return request;
}, error => {
    // Reject the error
    return Promise.reject(error);
});


// Interceptor for Axios response that will intercept the response and handle errors
workerAxiosInstance.interceptors.response.use(
    response => response,
    async error => {

        // Get the original request that caused the error
        const originalRequest = error.config;

        // Handle 401 errors specifically for token refresh
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Refresh the token
                await axios.post(`${BASE_URL}/worker/refreshToken`, {}, { withCredentials: true });
                // Return the request with the new token
                return workerAxiosInstance(originalRequest);

            } catch (refreshError) {
                // If there is an error refreshing the token, show an error message and log the user out
                toast.error(error.response.data.errors[0].message, {
                    onClose: () => {
                        localStorage.removeItem('workerAuth');
                        window.location.href = '/worker/login'
                    }
                });
                return;
            }
        }

        // Handle 403 errors
        if (error.response.status === 403) {
            // If there is an error accessing a resource, show an error message and log the user out
            toast.error(error.response.data.errors[0].message, {
                onClose: () => {
                    localStorage.removeItem('workerAuth');
                    window.location.href = '/worker/login'
                }
            });
            return;
        }

        // Reject the error if it is not a 401 or 403 error
        return Promise.reject(error);
    }
);

export default workerAxiosInstance;