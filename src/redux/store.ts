import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/apiSlice";
import filterReducer from "./features/filter/filterSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        filter: filterReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
