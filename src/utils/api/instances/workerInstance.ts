import axios from "axios";
import { toast } from "react-toastify";


// Create Axios instance with base URL and headers
const workerAxiosInstance = axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


// axios interceptor for the request
workerAxiosInstance.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

// response interceptor to handle 401 Unauthorized errors and refresh tokens
workerAxiosInstance.interceptors.response.use(
    response => response,
    async error => {

        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // refresh token api is calling
                await axios.post(`${process.env.BASE_API_URL}/worker/refreshToken`, {}, { withCredentials: true });
                return workerAxiosInstance(originalRequest);

            } catch (refreshError) {

                // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
                toast.error(error.response.data.errors[0].message, {
                    onClose: () => {
                        localStorage.removeItem('workerAuth');
                        window.location.href = '/worker/login';
                    }
                });
                return;
            }
        }

        if (error.response.status === 403) {
            toast.error(error.response.data.errors[0].message, {
                onClose: () => {
                    localStorage.removeItem('workerAuth');
                    window.location.href = '/worker/login';
                }
            });
            return;
        }

        return Promise.reject(error);
    }
);

export default workerAxiosInstance;