import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooking } from "../../@types/booking";

type FilterDate = {
    startDate:string;
    endDate:string;
}
interface IBookingState {
    bookings: IBooking[];
    currentPage:number,
    totalPages:number;
    totalDocuments:number;
    filterDate: FilterDate
}

const INITIAL_STATE:IBookingState = {
    bookings:[],
    currentPage:1,
    totalPages:4,
    totalDocuments:0,
    filterDate:{
        startDate:'',
        endDate:''
    }
}

const bookingSlice = createSlice({
    name:'bookingSlice',
    initialState:INITIAL_STATE,
    reducers:{
        addBooking: (state, action: PayloadAction<IBookingState>) => {
            state.bookings = action.payload.bookings;
            state.totalPages = action.payload.totalPages;
            state.totalDocuments = action.payload.totalDocuments;
        },
        removeBooking: (state, action:PayloadAction<{ index: number }>) => {
            const { index } = action.payload;
            state.bookings.splice(index,1)
        },
        updateWorkStatus: (state, action:PayloadAction<{ index: number, status:string }>) => {
            const { index } = action.payload;
            state.bookings[index].workStatus = action.payload.status;
        },
        additionalChargeUpdate: (state, action) => {
            const { index } = action.payload;
            state.bookings[index].additionalCharges = action.payload.additionalCharges;
        },
        previousPage: (state) => {
            state.currentPage = state.currentPage - 1;
        },
        nextPage: (state) => {
            state.currentPage = state.currentPage + 1;
        },
        updateBookingData: (state, action: PayloadAction<IBookingState>) => {
            state.bookings = [...state.bookings,...action.payload.bookings];
            state.totalPages = action.payload.totalPages;
            state.totalDocuments = action.payload.totalDocuments;
        },
        updateFilterDate: (state, action:PayloadAction<FilterDate>) => {
            state.filterDate = action.payload;
        }
    }
})

export const { addBooking, removeBooking, updateWorkStatus, additionalChargeUpdate, previousPage, nextPage, updateBookingData, updateFilterDate } = bookingSlice.actions;
export default bookingSlice.reducer