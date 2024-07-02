import { createSlice } from "@reduxjs/toolkit";
import { IWorker } from "../../@types/worker";
import { ConfirmationResult } from "firebase/auth";
import { workerAuth } from "./middlewares/workerLoginThunk";
import { workerLogout } from "./middlewares/workerLogoutThunk";

interface IWorkerSlice{
    workerRegister:IWorker | null;
    confirmationResultFirebase:ConfirmationResult | null;
    worker:IWorker | null;
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
        INITIAL_STATE.worker = JSON.parse(workerAuth);
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
        },
        updateWorkerData:(state,action) => {
            state.worker = action.payload
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
            localStorage.setItem('workerAuth', JSON.stringify(action.payload));
        })

        builder.addCase(workerAuth.rejected, (state, action) => {
            state.loading = false;  
            state.error = true;
            state.message = (action.payload as { errors?: { message: string }[] }).errors?.[0]?.message ?? "An error occurred";
        })

        builder.addCase(workerLogout.fulfilled, (state) => {
            state.worker = null;
            localStorage.removeItem('workerAuth');
        })
    }
})

export const { storeWorkerRegisterData, storeUploadDocuments, storeConfirmationResultFirebase, updateWorkerData } = workerSlicer.actions;
export default workerSlicer.reducer;