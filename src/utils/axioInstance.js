import axios from "axios";
import { BASE_URL } from "./apiPath";

const axoisInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Interceptor
axoisInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axoisInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                window.location.href = "/login";
            } else if (error.response.status === 500) {
                console.error("Server error. Please try again later.");
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("A timeout has occurred");
        }
        return Promise.reject(error);
    }
);

export default axoisInstance;