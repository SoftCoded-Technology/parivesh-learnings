import { configureStore } from "@reduxjs/toolkit";
// import productsApi from "../middlewares/productsApi";
import entities from "../entities/entities";
import { func } from "../middlewares/func";
import { productApi } from "../services/productApi";
// import cartProductsApi from "../middlewares/cartProductsApi";

export const store = configureStore({
  reducer: {
    entities,
    [productApi.reducerPath]:productApi.reducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([productApi,func]),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([func,productApi.middleware]),

  // we get thunk by default in this 
  // if we comment out {
  // 
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat([func]),
  // 
  // }
  // this code our project will run without any error
});


