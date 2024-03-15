import axios from "axios";

export const axiosLocalHostInstance = axios.create({
  baseURL: process.env.LOCAL_API_URL,
});
