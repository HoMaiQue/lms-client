import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import http from "./http";

export const customAxios = async ({
    url = "",
    method = "GET",
    headers,
    data,
    ...rest
}: AxiosRequestConfig) => {
    // Sử dụng instance của class Http để thực hiện yêu cầu
    try {
        const response = await http.request({
            url,
            method,
            headers,
            data: data,
            ...rest,
        });
        return { data: response.data };
    } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
            },
        };
    }
};
