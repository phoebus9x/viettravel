import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        booking: {
            tour_id: '',
            client_id: '',
            number_adults: '',
            number_children: '',
            total: '',
            status: '',
        },
    },
    reducers: {
        submitBooking: (state, action) => {
            state.booking = action.payload;
            console.log('state.booking', action.payload);
        },
    },
});

export const bookingReducer = bookingSlice.reducer;
export const { submitBooking } = bookingSlice.actions;
