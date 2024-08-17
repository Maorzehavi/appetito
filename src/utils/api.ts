import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import appConfig from './config';

interface FailedRequest {
    resolve: (token: string) => void;
    reject: (error: AxiosError) => void;
}

const apiClient = axios.create({
    baseURL: appConfig.productsUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error!);
        }
    });

    failedQueue = [];
};

apiClient.interceptors.request.use((config: any) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response && error.response.status === 403 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise<string>((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    if (!originalRequest.headers) {
                        originalRequest.headers = {};
                    }
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return apiClient(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = sessionStorage.getItem('refreshToken');
            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                const response = await apiClient.post('/auth/refresh-token', {
                    refreshToken: refreshToken,
                });

                if (response.status === 200) {
                    const newAccessToken = response.data.accessToken;
                    const newRefreshToken = response.data.refreshToken;

                    sessionStorage.setItem('accessToken', newAccessToken);
                    sessionStorage.setItem('refreshToken', newRefreshToken);

                    apiClient.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                    if (!originalRequest.headers) {
                        originalRequest.headers = {};
                    }
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    processQueue(null, newAccessToken);
                    return apiClient(originalRequest);
                } else {
                    processQueue(error, null);
                    return Promise.reject(error);
                }
            } catch (refreshError) {
                processQueue(refreshError as AxiosError, null);
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
