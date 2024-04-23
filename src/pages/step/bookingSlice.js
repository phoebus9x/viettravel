import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        booking: {
            _id: '',
            dob: '',
            email: '',
            phoneNumber: '',
            address: '',
            gender: '',
        },
    },
    reducers: {
        submit: (state, action) => {
            state.booking = action.payload;
        },
    },
});

export const bookingReducer = bookingSlice.reducer;
export const { submit } = bookingSlice.actions;
