import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

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
            //
        },
        updateHotelId(state, action) {
            state.user.hotelId = action.payload._id;
            //
        },
    },
});

export const { login, logout, signup, updateHotelId } = userSlice.actions;

// Hàm để lấy dữ liệu từ redux
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
