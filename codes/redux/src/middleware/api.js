import axios from "axios"
import { setFetchTodo } from "../Todos/Slice/fetchedtodoSlice"

const api = ({dispatch}) => next => async (action) => {
    if(action.type !== "FETCH_TODOS") return next(action)
    
    next(action)

    const{url, method, data, onSuccess, onError} = action.payload

   try{
    const response = await axios.request({
        baseURL: "https://jsonplaceholder.typicode.com",
        url,
        method,
        data
    })
    dispatch(setFetchTodo(response.data))
    dispatch({type:onSuccess, payload:response.data})
   } catch(error){
    dispatch({type:onError, payload:error.message})
   }

}

export default api