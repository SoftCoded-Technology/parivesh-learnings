import { configureStore } from "@reduxjs/toolkit";
import productsApi from "../middlewares/productsApi";
import entities from "../entities/entities";

export const store = configureStore({
  reducer: {
    entities
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi),
});
