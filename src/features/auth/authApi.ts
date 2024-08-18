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
  await apiClient.post("/auth/logout");
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
});


export { login, logout };
