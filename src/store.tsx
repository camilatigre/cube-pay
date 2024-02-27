import { configureStore } from '@reduxjs/toolkit';
import menuSelected from './slicers/Menu/slicer';
import auth from './slicers/Auth/slicer';
// import merchants from './slicers/Merchants/slicer';

export const store = configureStore({
    reducer: {
        menu: menuSelected,
        auth: auth,
        // merchants: merchants,
    },
});