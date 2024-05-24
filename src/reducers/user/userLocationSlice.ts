import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { 
    latitude: 11.461311, 
    longitude: 75.750370, 
}

const locationSlice = createSlice({
    name:'userLocation',
    initialState:INITIAL_STATE,
    reducers:{
        updateLocation:(state, action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        }
    }
})


export const { updateLocation } = locationSlice.actions;

export default locationSlice.reducer