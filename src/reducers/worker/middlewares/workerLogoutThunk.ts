import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { workerLogOutAPI } from "../../../utils/api/workerAPI";



export const workerLogout = createAsyncThunk('worker/logout', async (_, thunkApi) => {
    try {
        const response = await workerLogOutAPI();
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
}
);
