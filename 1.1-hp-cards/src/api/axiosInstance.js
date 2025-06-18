import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://potterhead-api.vercel.app/api",
  timeout: 5000, //5s
});

export default axiosInstance;
