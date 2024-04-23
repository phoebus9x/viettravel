import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        booking: {
            tag: '',
            title: '',
            short: '',
            img: '',
            content: '',
        },
    },
    reducers: {
        submit: (state, action) => {
            state.booking = action.payload;
            console.ooking("state.booking", action.payload);
        },
    },
});

export const bookingReducer = bookingSlice.reducer;
export const { submit } = bookingSlice.actions;
