import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        client: {
            name: '',
            dob: '',
            email: '',
            phoneNumber: '',
            address: '',
            gender: '',
        },
    },
    reducers: {
        submit: (state, action) => {
            state.blog = action.payload;
            console.log("state.blog", state.blog);
        },
    },
});

export const blogReducer = blogSlice.reducer;
export const { submit } = blogSlice.actions;
