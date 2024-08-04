import axios from "axios";
import { setProducts } from "../slice/productsSlice";

const productsApi = ({dispatch}) => (next) => async (action) => {
    if (action.type !== "FETCH_PRODUCTS") return next(action)
    next(action)

    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        dispatch(setProducts(response.data))
        dispatch({ type: "PRODUCTS/FETCHED", payload: response.data })
    } catch (error) {
        dispatch({ type: "PRODUCTS/FETCHED/ERROR", payload: error.message })
    }

}

export default productsApi

