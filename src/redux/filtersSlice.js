import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        // location: "",
        // ac: false,
        // automatic: false,
        // kitchen: false,
        // tv: false,
        // bathroom: false,
        // type: "",
        filter: {},
    },
    reducers: {
        setFilters: (state, { payload }) => {
            state.filter = payload;
            console.log(state.filter);
        },
        cleanFilters: (state) => {
            state.filter = {};
            console.log(state.filter);
        }
    }
    }
)

export const filtersReducer = filtersSlice.reducer;

export const selectFilter = state => state.filters.filter;
export const {setFilters, cleanFilters} = filtersSlice.actions;
