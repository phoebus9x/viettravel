import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blog: {
            tag: '',
            title: '',
            short: '',
            img: '',
            content: '',
        },
    },
    reducers: {
        submit: (state, action) => {
            state.blog = action.payload;
            console.log("state.blog", action.payload);
        },
    },
});

export const blogReducer = blogSlice.reducer;
export const { submit } = blogSlice.actions;
