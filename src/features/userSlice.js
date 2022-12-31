import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // user: null,
    user: {
        _id: '6396fe342e84ad02f4864a65',
        createdDate: '12/12/2022, 5:11:00 PM',
        updatedDate: '12/23/2022, 9:25:49 PM',
        username: 'trchihien',
        email: 'chihien2002@gmail.com',
        password: '$2a$10$kcCaqO5wgOmXjhMCd2lqvO6bP56udSI2/8wrTF9L6ZEvzkZYyXcfy',
        firstName: 'C',
        lastName: 'C',
        userType: 1,
        phoneNumber: '0795907075',
        avatar: 'https://visanuocngoai.vn/wp-content/uploads/2022/04/meo-anh-long-ngan-1.jpg',
        hotelId: null,
        confirmCode: '08728403',
    },
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
        },
    },
});

export const { login, logout, signup } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
