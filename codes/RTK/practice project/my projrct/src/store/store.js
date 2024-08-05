import { configureStore } from "@reduxjs/toolkit";
// import productsApi from "../middlewares/productsApi";
import entities from "../entities/entities";
import { func } from "../middlewares/func";
// import cartProductsApi from "../middlewares/cartProductsApi";

export const store = configureStore({
  reducer: {
    entities
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([productApi,func]),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([func]),

  // we get thunk by default in this 
  // if we comment out {
  // 
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat([func]),
  // 
  // }
  // this code our project will run without any error
});
