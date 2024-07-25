import axios from "axios";
import appConfig from "./config";


const apiClient = axios.create({
    baseURL: appConfig.productsUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;