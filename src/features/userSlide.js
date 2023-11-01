import { createSlice } from "@reduxjs/toolkit";

export const userSlide = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;

        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlide.actions;



export default userSlide.reducer;