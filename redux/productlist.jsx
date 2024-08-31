import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchData = createAsyncThunk("/products/posts", async (req, res) => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return response.data;
})
const postData = createAsyncThunk("/products/posts", async (data) => {
    let response = await axios.post("https://jsonplaceholder.typicode.com/posts", {data});
    return response.data;
})
const initialState = {
    products: [],
    status: "idle",
    error: null
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading....."
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default productSlice.reducer;