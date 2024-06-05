import axios from "axios";
import { BASE_WORKER_URL } from "../../../constants/baseURL";
import { toast } from "react-toastify";


// Create Axios instance with base URL and headers
const axiosInstance = axios.create({
    baseURL: BASE_WORKER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


// axios interceptor for the request
axiosInstance.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

// response interceptor to handle 401 Unauthorized errors and refresh tokens
axiosInstance.interceptors.response.use(
    response => response,
    async error => {

        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                alert('refres')
                // refresh token api is calling
                await axios.post('/api/worker/refreshToken');
                return axiosInstance(originalRequest);

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

export default axiosInstance;