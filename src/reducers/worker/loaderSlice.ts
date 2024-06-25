import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLoading: false
};

const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState: INITIAL_STATE,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;  
        },
        stopLoading: (state) => {
            state.isLoading = false; 
        }
    }
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
