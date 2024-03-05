import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'dashboard',
    initialState: {
        envs: {},
        envSelectedId: '',
        switchValue: false
    },
    reducers: {
        saveEnvs: (state, action) => void (state.envs = action.payload),
        saveEnvSelectedId: (state, action) => void (state.envSelectedId = action.payload),
        saveSwitchValue: (state, action) => void (state.switchValue = action.payload),
    },
});

export const { saveEnvs, saveEnvSelectedId, saveSwitchValue } = slice.actions;
export default slice.reducer;