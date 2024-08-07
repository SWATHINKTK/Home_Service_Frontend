import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAdminData } from "../../../@types/admin";
import { adminAuthAPI } from "../../../utils/api/adminAPI";
import { AxiosError } from "axios";

export const adminAuthThunk = createAsyncThunk('admin/login', async(adminCredentials:IAdminData, thunkApi) => {
    try {
        const response = await adminAuthAPI(adminCredentials);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            return thunkApi.rejectWithValue(error.response.data)
        }
        throw error;
    }
})