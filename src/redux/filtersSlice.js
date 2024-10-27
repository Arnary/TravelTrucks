import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        filter: {},
    },
    reducers: {
        setFilters: (state, { payload }) => {
            for (const field in payload) {
                if (payload[field] === false) {
                    delete payload[field];
                }
            }
            state.filter = payload;
        }
    }
    }
)

export const filtersReducer = filtersSlice.reducer;

export const selectFilter = state => state.filters.filter;
export const {setFilters} = filtersSlice.actions;
