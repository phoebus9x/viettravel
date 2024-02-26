import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'clients',
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
            state.client = action.payload;
        },
    },
});

export const clientReducer = clientSlice.reducer;
export const { submit } = clientSlice.actions;
