import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList: [],

    },
    reducers: {
        addToWishList: (state, action) => {
            const { id, title, price, image,rating } = action.payload;
            const existingProduct = state.wishList.find((product) => product.id === id);
            if (existingProduct) {
                return
            } else {
                const newProduct = {
                    id,
                    title,
                    price,
                    image,
                    rating,
                    inWishlist:true
                };
                state.wishList.push(newProduct);
            }
        },
        removeFromWishList: (state, action) => {
            state.wishList = state.wishList.filter((item) => item.id !== action.payload);
        },
    },
})

export const { addToWishList,removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer