import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading:false,
        lastFetched:0
    },
    reducers: {
        setProducts: (state, action) => {
            state.isLoading = true;
            state.products = action.payload;
            state.lastFetched = Date.now();
            state.isLoading = false;
        },
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;