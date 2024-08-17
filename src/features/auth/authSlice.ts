import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
interface AuthState {

    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },

        clearTokens: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },

    },

    });

export const { setTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;