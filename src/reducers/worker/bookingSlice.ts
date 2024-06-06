import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooking } from "../../@types/booking";

interface IBookingState {
    booking: IBooking[];
}

const INITIAL_STATE:IBookingState = {
    booking:[]
}

const bookingSlice = createSlice({
    name:'bookingSlice',
    initialState:INITIAL_STATE,
    reducers:{
        addBooking: (state, action: PayloadAction<IBooking[]>) => {
            state.booking = action.payload;
        },
        removeBooking: (state, action:PayloadAction<{ index: number }>) => {
            const { index } = action.payload;
            state.booking.splice(index,1)
        },
        updateWorkStatus: (state, action:PayloadAction<{ index: number, status:string }>) => {
            const { index } = action.payload;
            state.booking[index].workStatus = action.payload.status;
        },
        additionalChargeUpdate: (state, action) => {
            const { index } = action.payload;
            state.booking[index].additionalCharges = action.payload.additionalCharges;
        }
    }
})

export const { addBooking, removeBooking, updateWorkStatus, additionalChargeUpdate } = bookingSlice.actions;
export default bookingSlice.reducer