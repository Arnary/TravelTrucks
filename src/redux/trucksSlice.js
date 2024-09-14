import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckById, fetchTrucks } from "./trucksOps";


const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        allTrucks: [],
        loading: false,
        error: null,
        truckDetail: {},
    },
    extraReducers: builder => builder
        .addCase(fetchTrucks.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTrucks.fulfilled, (state, {payload}) => {
            state.allTrucks = payload;
            state.loading = false;
        })
        .addCase(fetchTrucks.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
        .addCase(fetchTruckById.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTruckById.fulfilled, (state, {payload}) => {
            state.truckDetail = payload;
            state.loading = false;
        })
        .addCase(fetchTruckById.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
});

export const trucksReducer = trucksSlice.reducer;
export const selectTrucks = state => state.trucks.allTrucks;
export const selectTruckById = state => state.trucks.truckDetail;
export const selectLoading = state => state.trucks.loading;
export const selectError = state => state.trucks.error;
