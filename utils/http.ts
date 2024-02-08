import HttpStatusCode from "@/constants/httpStatusCode";
import axios, { AxiosError, AxiosInstance } from "axios";
import toast from "react-hot-toast";

class Http {
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Add a request interceptor
        this.axiosInstance.interceptors.request.use(
            function (config) {
                // Do something before request is sent
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        // Add a response interceptor
        this.axiosInstance.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                console.log(response);
                return response;
            },
            function (error: AxiosError) {
                if (
                    ![
                        HttpStatusCode.UnprocessableEntity,
                        HttpStatusCode.Unauthorized,
                    ].includes(error.response?.status as number)
                ) {
                    const data: any | undefined = error.response?.data;
                    const message = data?.message || error.message;
                    toast.error(message);
                }
                return Promise.reject(error);
            }
        );
    }
}
const http = new Http().axiosInstance;
export default http;
