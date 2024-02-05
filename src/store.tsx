import { configureStore } from '@reduxjs/toolkit';
import menuSelected from './slicers/Menu/slicer';

export const store = configureStore({
    reducer: {
        menu: menuSelected,
    },
});