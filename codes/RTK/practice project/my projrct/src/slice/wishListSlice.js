import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList: [],
    },
    reducers: {
        setWishList: (state, action) => {
            state.wishList = action.payload;
        },
    },
})

export const { setWishList } = wishListSlice.actions;
export default wishListSlice.reducer