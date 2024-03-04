import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'dashboard',
    initialState: {
        envs: {},
        envSelectedId: ''
    },
    reducers: {
        saveEnvs: (state, action) => void (state.envs = action.payload),
        saveEnvSelectedId: (state, action) => void (state.envSelectedId = action.payload),
    },
});

export const { saveEnvs, saveEnvSelectedId } = slice.actions;
export default slice.reducer;