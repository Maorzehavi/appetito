import axios from "axios";
import appConfig from "./config";


const apiClient = axios.create({
    baseURL: appConfig.productsUrl,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export default apiClient;