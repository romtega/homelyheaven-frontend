/* eslint-disable comma-dangle */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/",
  timeout: 10000,
});
export default axiosInstance;