import { configureStore } from '@reduxjs/toolkit';
import { clientReducer } from './clientSlice';
import { blogReducer } from './blogSlice';

export const store = configureStore({
    reducer: {
        client: clientReducer,
        blog: blogReducer,
    },
});
