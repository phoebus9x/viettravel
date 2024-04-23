import { configureStore } from '@reduxjs/toolkit';
import { clientReducer } from './clientSlice';
import { blogReducer } from './blogSlice';
import { bookingReducer } from './bookingSlice';
import { tourReducer } from './tourSlice';

export const store = configureStore({
    reducer: {
        client: clientReducer,
        blog: blogReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
