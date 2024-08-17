import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/api";

export type LoginRequest = {
  username: string;
  password: string;
};

const login = createAsyncThunk(
  "auth/login",
  async (loginRequest: LoginRequest) => {
    const response = await apiClient.post("/auth/login", loginRequest);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  }
);

const logout = createAsyncThunk("auth/logout", async () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  await apiClient.post("/auth/logout");
});

// const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
//   console.log("-----------refreshToken--------------");
//   apiClient.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("accessToken")}`;
//   const response = await apiClient.post("/auth/refresh-token");
//   sessionStorage.setItem("accessToken", response.data.accessToken);
//   sessionStorage.setItem("refreshToken", response.data.refreshToken);
//   apiClient.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
//   return response.data;
// });


export { login, logout };
