import { createSlice } from "@reduxjs/toolkit";
import { IWorker } from "../../@types/worker";
import { ConfirmationResult } from "firebase/auth";

interface IWorkerSlice{
    workerRegister:IWorker | null
    confirmationResultFirebase:ConfirmationResult | null
}

const INITIAL_STATE:IWorkerSlice = {
    workerRegister:null,
    confirmationResultFirebase:null
}

const workerSlicer = createSlice({
    name:'workerSlice',
    initialState:INITIAL_STATE,
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
    }
})

export const { storeWorkerRegisterData, storeUploadDocuments, storeConfirmationResultFirebase } = workerSlicer.actions;
export default workerSlicer.reducer;