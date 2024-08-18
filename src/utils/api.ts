import axios from 'axios';
import appConfig from './config';


const apiClient = axios.create({
    baseURL: appConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

apiClient.interceptors.request.use((config) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use(
    (resposne) => resposne,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 || error.response.status === 403
            && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = sessionStorage.getItem('refreshToken');
                const response = await axios.post(`${appConfig.baseUrl}auth/refresh-token`,{
                    refreshToken: refreshToken,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${refreshToken}`,
                    }
                }
            );
                console.dir("===========",response);
                const responseData = response.data;
                console.log("===========",responseData);
                sessionStorage.setItem('accessToken', responseData.accessToken);
                sessionStorage.setItem('refreshToken', responseData.refreshToken);

                originalRequest.headers.Authorization = `Bearer ${responseData.accessToken}`;
                return axios(originalRequest);
            } catch (error) {
                console.log(error);
            }
            }
        return Promise.reject(error);
    }
);

export default apiClient;
