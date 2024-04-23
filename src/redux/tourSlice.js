import { createSlice } from '@reduxjs/toolkit';

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tour: {
            tag: '',
            title: '',
            short: '',
            img: '',
            content: '',
        },
    },
    reducers: {
        submit: (state, action) => {
            state.tour = action.payload;
            console.log("state.tour", action.payload);
        },
    },
});

export const tourReducer = tourSlice.reducer;
export const { submit } = tourSlice.actions;
