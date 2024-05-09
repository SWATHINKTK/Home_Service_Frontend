import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { userLogoutAPI } from "../../../utils/api/userAPI";





export const userLogout = createAsyncThunk('user/logout',async (_, thunkApi) => {
    try {
      const response = await userLogoutAPI();
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return thunkApi.rejectWithValue(error.response.data)
      }
    }
  }
);
