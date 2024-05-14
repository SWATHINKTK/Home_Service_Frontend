import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../@types/user";
import { userAuth } from "./middlewares/userLoginThunk";
import { toast } from "react-toastify";
import { userLogout } from "./middlewares/userLogoutThunk";

export interface IUserState{
    user:IUser | null,
    loading:boolean,
    success:boolean,
    error:null | string,
}

const INITIAL_STATE:IUserState = {
    user:null,
    loading:false,
    success:false,
    error:null,
}


const checkUserExist = () => {
    const user = localStorage.getItem('userAuth');
    if(user){
        INITIAL_STATE.user = JSON.parse(user);
    }
    return INITIAL_STATE
}

const userSlice = createSlice({
    name:'user',
    initialState:checkUserExist(),
    reducers:{
        updateUserData:(state,action) => {
            state.user = action.payload
            localStorage.setItem('userAuth',JSON.stringify(action.payload));
        }
    },
    extraReducers:(builder) => {
        builder.addCase(userAuth.pending,(state) => {
            state.loading = true;
        });

        builder.addCase(userAuth.fulfilled, (state, action) =>{
            state.loading = false;
            state.error = null;
            state.user = action.payload;
            localStorage.setItem('userAuth',JSON.stringify(action.payload));
        })

        builder.addCase(userAuth.rejected, (state, action) => {
            state.loading = false;
            console.log("payload",action.payload)
            state.error = (action.payload as { errors?: { message: string }[] }).errors?.[0]?.message ?? "Server Error.";
            toast.error(state.error)
        }),
        
        builder.addCase(userLogout.fulfilled, (state) =>{
            state.loading = false;
            state.error = null;
            state.user = null;
            localStorage.removeItem('userAuth');
        })

        builder.addCase(userLogout.rejected, (state, action) => {
            state.loading = false;
            state.error = (action.payload as { errors?: { message: string }[] }).errors?.[0]?.message ?? "An error occurred";
            toast.error(state.error)
        })
    }
})

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;