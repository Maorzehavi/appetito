import axios from "axios";
import appConfig from "./config";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}
else if (refreshToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;
}

const apiClient = axios.create({
    baseURL: appConfig.productsUrl,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",

    },
});

export default apiClient;