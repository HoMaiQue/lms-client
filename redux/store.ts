import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./auth/authSlice";
const rootState = {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
};
export const store = configureStore({
    devTools: true,
    reducer: rootState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
