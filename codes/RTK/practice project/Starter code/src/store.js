import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";

export const store = configureStore({
    reducer: {
        [tasksSlice.reducerPath]: tasksSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),tasksSlice.middleware]
});