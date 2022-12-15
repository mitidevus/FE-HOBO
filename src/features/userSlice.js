import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // user: null,
    user: {
        //phải có user_id
        avatar: 'https://render.fineartamerica.com/images/rendered/default/acrylic-print/8/7/hangingwire/break/images/artworkimages/medium/1/funny-boss-cat-alexey-konovalenko.jpg',
        hotelId: "639700482e84ad02f4864a68",
        userType: 2,
        userId: '6396feca2e84ad02f4864a67' 
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
