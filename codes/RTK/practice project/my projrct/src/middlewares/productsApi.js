import axios from "axios";
const BASE_URL = "https://fakestoreapi.com"

const productsApi = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== "FETCH_DATA") return next(action)
    next(action)
    const { url, onStart, onSuccess, onError } = action.payload

    try {
        dispatch({
            type: onStart
        })
        const response = await axios.get(`${BASE_URL}/${url}`)
        dispatch({
            type: onSuccess,
            payload: response.data
        })
        // dispatch({ type: "PRODUCTS/FETCHED", payload: response.data })
    } catch (error) {
        dispatch({ type: onError, payload: error.message })
    }

}

export default productsApi

export const fetchData = (payload) =>({type:"FETCH_DATA" , payload})