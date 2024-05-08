import { createSlice } from "@reduxjs/toolkit";
import { IWorker } from "../../@types/worker";
import { ConfirmationResult } from "firebase/auth";
import { workerAuth } from "./middlewares/workerLoginThunk";
import { toast } from "react-toastify";

interface IWorkerSlice{
    workerRegister:IWorker | null;
    confirmationResultFirebase:ConfirmationResult | null;
    worker:string | null;
    loading: boolean;
    success: boolean;
    error: boolean;
    message:string;
}

const INITIAL_STATE:IWorkerSlice = {
    workerRegister:null,
    confirmationResultFirebase:null,
    worker:null,
    loading:false,
    success:false,
    error:false,
    message:''
}

const checkWorkerExist = () => {
    const workerAuth = localStorage.getItem('workerAuth');
    if (workerAuth) {
        INITIAL_STATE.worker = workerAuth;
    }
    return INITIAL_STATE
}


const workerSlicer = createSlice({
    name:'workerSlice',
    initialState:checkWorkerExist(),
    reducers:{
        storeWorkerRegisterData:(state, action)=> {
            state.workerRegister = action.payload;
        },
        storeUploadDocuments:(state, action) => {
            if (state.workerRegister) {
                const [certificate, idProof] = action.payload;
                state.workerRegister.certificate = certificate;
                state.workerRegister.idProof = idProof;
            }
        },
        storeConfirmationResultFirebase:(state, action) => {
            state.confirmationResultFirebase = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(workerAuth.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(workerAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.worker = action.payload;
            localStorage.setItem('workerAuth',action.payload);
        })

        builder.addCase(workerAuth.rejected, (state, action) => {
            state.loading = false;  
            state.error = true;
            state.message = (action.payload as { errors?: { message: string }[] }).errors?.[0]?.message ?? "An error occurred";
            toast.error(state.message)
        })
    }
})

export const { storeWorkerRegisterData, storeUploadDocuments, storeConfirmationResultFirebase } = workerSlicer.actions;
export default workerSlicer.reducer;