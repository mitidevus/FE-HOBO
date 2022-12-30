import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined
};

// Redux toolkit
export const userSlice = createSlice({  
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        signup(state, action) {
            state.user = action.payload;
        },
    },
});

export const { login, logout, signup } = userSlice.actions;

// Hàm để lấy dữ liệu từ redux
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
