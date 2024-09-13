import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./trucksOps";


const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(fetchTrucks.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTrucks.fulfilled, (state, {payload}) => {
            state.items = payload;
            state.loading = false;
        })
        .addCase(fetchTrucks.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
});

export const trucksReducer = trucksSlice.reducer;
export const selectTrucks = state => state.trucks.items;
export const selectLoading = state => state.trucks.loading;
export const selectError = state => state.trucks.error;

