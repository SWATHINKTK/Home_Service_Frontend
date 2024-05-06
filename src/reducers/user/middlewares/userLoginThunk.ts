import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "../../../utils/api/userAPI";
import { AxiosError } from "axios";



interface UserCredential {
  username: string;
  password: string;
}

export const userAuth = createAsyncThunk('user/login',async (userCredential: UserCredential, thunkApi) => {
    try {
      const response = await userLogin(userCredential);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return thunkApi.rejectWithValue(error.response.data)
      }
    }
  }
);
