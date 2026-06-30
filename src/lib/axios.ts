import axios, { AxiosError, AxiosResponse } from "axios";

// Shared Axios instance with base URL from env and JSON content type
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Pass-through response interceptor; re-throws Axios errors for callers to handle
api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;
