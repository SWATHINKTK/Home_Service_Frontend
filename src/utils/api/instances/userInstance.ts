import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

// Create an Axios instance with the base URL, headers, and withCredentials set to true
const userAxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json', 
    },
    withCredentials: true,
});


// This line of code creates a new instance of Axios called userAxiosInstance.
userAxiosInstance.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

// Interceptor for Axios response that will intercept the response and handle errors
userAxiosInstance.interceptors.response.use(
    response => response,
    async error => {

        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // refresh token api is calling
                await axios.post(`${BASE_URL}/user/refresh`,{}, { withCredentials: true });
                return userAxiosInstance(originalRequest);

            } catch (refreshError) {

                // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
                toast.error(error.response.data.errors[0].message, {
                    onClose: () => {
                        localStorage.removeItem('userAuth');
                        window.location.href = '/login';
                    }
                });
                return;
            }
        }

        if (error.response.status === 403) {
            toast.error(error.response.data.errors[0].message, {
                onClose: () => {
                    localStorage.removeItem('userAuth');
                    window.location.href = '/login';
                }
            });
            return;
        }

        return Promise.reject(error);
    }
);

export default userAxiosInstance;