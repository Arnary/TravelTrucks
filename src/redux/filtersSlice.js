import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: "",
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
        type: "",
    },
})