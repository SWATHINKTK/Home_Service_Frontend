import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/userSlice";
import userRegisterSlice from "../reducers/user/userRegisterSlice";
import adminAuthSlicer from "../reducers/admin/adminAuthSlicer";

const rootReducer = combineReducers({
    user:userSlice,
    userRegisterSlice:userRegisterSlice,
    adminAuthSlice:adminAuthSlicer
})
const store  = configureStore({
    reducer:rootReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;