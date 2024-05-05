import { createSlice } from "@reduxjs/toolkit";
import { adminAuthThunk } from "./middlewares/adminLoginThunk";
// import { toast } from "react-toastify";

interface IAdminState{
    admin:string | null,
    loading:boolean,
    success:boolean,
    error:boolean
}


const INITIAL_STATE:IAdminState = {
    admin:null,
    loading:false,
    success: false,
    error:false
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
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(adminAuthThunk.pending, (state) =>{
            state.loading = true;
        })

        builder.addCase(adminAuthThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = false;
            state.admin = action.payload.data;
            localStorage.setItem('adminAuth', action.payload.data)
        })

        builder.addCase(adminAuthThunk.rejected , (state) => {
            state.error = true;
        })
    }
})


export default adminAuthSlice.reducer;