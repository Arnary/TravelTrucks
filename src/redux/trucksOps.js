import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/"

export const fetchTrucks = createAsyncThunk('trucks/fetchAll', async (_, ThunkAPI) => {
    try {
        const response = await axios.get("/campers");
        return response.data.items;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
    }
});

