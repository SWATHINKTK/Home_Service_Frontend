import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { workerLoginApi } from "../../../utils/api/workerAPI";



interface workerCredential {
    phoneNumber: string;
    password: string;
}

export const workerAuth = createAsyncThunk('worker/login', async (workerCredential: workerCredential, thunkApi) => {
    try {
        const response = await workerLoginApi(workerCredential);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
}
);
