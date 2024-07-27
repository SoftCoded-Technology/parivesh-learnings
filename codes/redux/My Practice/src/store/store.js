import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducers/Reducer";
import middleware from "../middleware/middleware";
import api from "../middleware/api";


export const store = configureStore(
    {
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api, middleware]),
    }
)