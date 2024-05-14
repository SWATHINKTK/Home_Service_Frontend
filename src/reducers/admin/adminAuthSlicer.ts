import { createSlice } from "@reduxjs/toolkit";
import { adminAuthThunk } from "./middlewares/adminLoginThunk";
// import { toast } from "react-toastify";

interface IAdminState{
    admin:string | null,
    loading:boolean,
    success:boolean,
    error:boolean,
    message:string,
}


const INITIAL_STATE:IAdminState = {
    admin:null,
    loading:false,
    success: false,
    error:false,
    message:''
}

const checkAdminExist = () => {
    const admin = localStorage.getItem('adminAuth');
    if (admin) {
        INITIAL_STATE.admin = admin;
    }
    return INITIAL_STATE
}


const adminAuthSlice = createSlice({
    name:'adminAuth',
    initialState: checkAdminExist(),
    reducers:{
        adminLogout:(state) => {
            state.admin = null;
            localStorage.removeItem('adminAuth');
        }
    },
    extraReducers:(builder) => {
        builder.addCase(adminAuthThunk.pending, (state) =>{
            state.loading = true;
        })

        builder.addCase(adminAuthThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = false;
            state.admin = action.payload;
            localStorage.setItem('adminAuth', action.payload)
        })

        builder.addCase(adminAuthThunk.rejected , (state,action) => {
            state.error = true;
            state.message = (action.payload as { errors?: { message: string }[] }).errors?.[0]?.message ?? "An error occurred";
        })
    }
})

export const { adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;