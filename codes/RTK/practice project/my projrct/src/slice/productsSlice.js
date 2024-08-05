import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetching', async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        return response.data
    } catch (error) {
        return error
    }
})


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        lastFetched: 0,
        error: null
    },
    reducers: {
        // productsRequested: (state) => {
        //     state.isLoading = true;
        // },
        // productsRequestError: (state, action) => {
        //     state.isLoading = false
        //     state.error = action.payload || "Something Went Wrong !"
        // },
        // setProducts: (state, action) => {
        //     state.products = action.payload;
        //     state.lastFetched = Date.now();
        //     state.isLoading = false;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.lastFetched = Date.now();
            state.isLoading = false;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload || "Something Went Wrong !"
        })
    }
});

// const { setProducts, productsRequested, productsRequestError } = productsSlice.actions;
export default productsSlice.reducer;

// this is basically working as a thunk action creator function
// export const fetchProducts =()=> async (dispatch) => {

//     dispatch(productsRequested())
//     try {
//         const response = await axios.get("https://fakestoreapi.com/products")
//         dispatch(setProducts(response.data))
//     } catch (error) {

//         dispatch(productsRequestError(error.message))
//     }
// }