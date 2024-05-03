import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blog: {
            _id: '',
            tag: '',
            title: '',
            short: '',
            img: '',
            content: '',
        },
    },
    reducers: {
        submitBlog: (state, action) => {
            state.blog = action.payload;
            console.log('state.blog', action.payload);
        },
    },
});

export const blogReducer = blogSlice.reducer;
export const { submitBlog } = blogSlice.actions;
