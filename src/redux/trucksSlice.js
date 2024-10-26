import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckById, fetchTrucks } from "./trucksOps";


const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        allTrucks: [],
        loading: false,
        error: null,
        truckDetail: {},
        page: 1,
        total: 0,
        morePages: false,
    },
    reducers: {
        loadMorePage: (state) => {
            state.page += 1;
        },
        resetPage: (state) => {
            state.page = 1;
        }
    },
    extraReducers: builder => builder
        .addCase(fetchTrucks.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTrucks.fulfilled, (state, { payload }) => {
            if (state.page === 1) {
                state.allTrucks = payload.items;
            } else {
                state.allTrucks.push(...payload.items);
            }
            state.loading = false;

            state.total = payload.total;
            state.morePages = state.allTrucks.length < state.total;
        })
        .addCase(fetchTrucks.rejected, (state) => {
            state.error = true;
            state.loading = false;
            state.morePages = false;
        })
        .addCase(fetchTruckById.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTruckById.fulfilled, (state, { payload }) => {

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
export const selectPage = state => state.trucks.page;
export const selectLoading = state => state.trucks.loading;
export const selectError = state => state.trucks.error;
export const selectTotal = state => state.trucks.total;
export const selectMorePages = state => state.trucks.morePages;

export const {loadMorePage, resetPage} = trucksSlice.actions;
