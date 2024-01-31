import { configureStore } from '@reduxjs/toolkit';
import { clientReducer } from '~/pages/step/clientSlice';

export const store = configureStore({
    reducer: {
        client: clientReducer,
    },
});
