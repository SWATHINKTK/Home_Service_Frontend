import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/userSlice";
import userRegisterSlice from "../reducers/user/userRegisterSlice";
import adminAuthSlicer from "../reducers/admin/adminAuthSlicer";
import workerSlicer from "../reducers/worker/workerSlice";
import userLocationSlice from "../reducers/user/userLocationSlice";
import bookingSlice from "../reducers/worker/bookingSlice";

const rootReducer = combineReducers({
    user:userSlice,
    userRegisterSlice:userRegisterSlice,
    adminAuthSlice:adminAuthSlicer,
    workerSlice:workerSlicer,
    location:userLocationSlice,
    booking:bookingSlice,
})
const store  = configureStore({
    reducer:rootReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;