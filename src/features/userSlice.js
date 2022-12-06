import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // user: null,
    user: {
        avatar: 'https://render.fineartamerica.com/images/rendered/default/acrylic-print/8/7/hangingwire/break/images/artworkimages/medium/1/funny-boss-cat-alexey-konovalenko.jpg',
        hotelId: 20127651,
        userType: '1',
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
