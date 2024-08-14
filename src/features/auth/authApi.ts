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
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  }
);

const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  await apiClient.post("/auth/logout");
});

const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
  const response = await apiClient.post("/auth/refresh-token");
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
});


export { login, logout, refreshToken };
