import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";

const rootReducer = {
    trucks: trucksReducer
    // filters: filtersReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});