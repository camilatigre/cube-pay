import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        userInfo: {},
    },
    reducers: {
        saveAuth: (state, action) => void (state.userInfo = action.payload)
    },
});

export const { saveAuth } = slice.actions;
export default slice.reducer;