import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../slice/productsSlice";
import wishListReducer from "../slice/wishListSlice";
import cartReducer from '../slice/cartSlice';

const entities = combineReducers({
    products:productsReducer,
    wishList:wishListReducer,
    cart:cartReducer,
})

export default entities