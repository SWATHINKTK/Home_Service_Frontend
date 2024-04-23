import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/userSlice";
import userRegisterSlice from "../reducers/user/userRegisterSlice";

const rootReducer = combineReducers({
    user:userSlice,
    userRegisterSlice:userRegisterSlice
})
const store  = configureStore({
    reducer:rootReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;