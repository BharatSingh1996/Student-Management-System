import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    authChecked: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setAuthChecked: (state, action) => {
            state.authChecked = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.authChecked = true;
            localStorage.clear();
        },
    },
});

export const { setAuthenticated, setAuthChecked, logout } = authSlice.actions;
export default authSlice.reducer;
