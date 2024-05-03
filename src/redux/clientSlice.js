import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        client: {
            _id: '',
            name: '',
            dob: '',
            email: '',
            phoneNumber: '',
            address: '',
            gender: '',
        },
    },
    reducers: {
        submitClient: (state, action) => {
            state.client = action.payload;
        },
    },
});

export const clientReducer = clientSlice.reducer;
export const { submitClient } = clientSlice.actions;
