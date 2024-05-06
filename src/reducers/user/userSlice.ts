import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../@types/user";
import { userAuth } from "./middlewares/userLoginThunk";
import { toast } from "react-toastify";

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
    reducers:{},
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
            state.error = (action.payload as { errors?: { message: string }[] }).errors?.[0]?.message ?? "An error occurred";
            toast.error(state.error)
        })
    },
})

export default userSlice.reducer;