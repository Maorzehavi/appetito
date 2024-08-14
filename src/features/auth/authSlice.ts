import { createSlice } from "@reduxjs/toolkit";
interface AuthState {

    accessToken: string | null;
    refreshToken: string | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    status: "idle",
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }
    });