import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'menuSelected',
    initialState: {
        menuSelected: 0,
    },
    reducers: {
        changeSelected: (state, action) => void (state.menuSelected = action.payload)
    },
});

export const { changeSelected } = slice.actions;
export default slice.reducer;