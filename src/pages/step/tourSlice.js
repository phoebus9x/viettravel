import { createSlice } from '@reduxjs/toolkit';

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tour: {
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
            state.tour = action.payload;
        },
    },
});

export const tourReducer = tourSlice.reducer;
export const { submit } = tourSlice.actions;
