import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../@types/user";

interface IUserRegisterState{
    userData:IUser | null,
    success:boolean,
    error:boolean,
    message:string
}


const INITIAL_STATE:IUserRegisterState = {
    userData:null,
    success:false,
    error:false,
    message:""
}

const registrationSlice = createSlice({
    name:'registerSlice',
    initialState:INITIAL_STATE,
    reducers:{
        storeUserData:(state, action) => {
            state.userData = action.payload;
        },
        errorUserRegistration:(state, action) => {
            state.error = true;
            state.message = action.payload;
        },
        successUserRegistration:(state, action) => {
            state.success = true;
            state.message = action.payload;
        }
    },
  
})

export const { storeUserData, errorUserRegistration, successUserRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;