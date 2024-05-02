import { createSlice } from '@reduxjs/toolkit';

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tour: {
            id: '',
            title: '',
            trip: '',
            short: '',
            img1: '',
            img2: '',
            img3: '',
            duration: '',
            price_adults: '',
            price_children: '',
            start_date: '',
            end_date: '',
            place_start: '',
            number_of_participants: '',
            detail: '',
        },
    },
    reducers: {
        submitTour: (state, action) => {
            state.tour = action.payload;
            console.log('state.tour', action.payload);
        },
    },
});

export const tourReducer = tourSlice.reducer;
export const { submitTour } = tourSlice.actions;
