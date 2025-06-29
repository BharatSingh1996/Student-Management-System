// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    email: null,
    roles: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_, action) => action.payload,
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
