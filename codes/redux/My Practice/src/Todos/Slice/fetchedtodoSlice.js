import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"


const fetchTodoSlice = createSlice({
    name: 'fetchTodo',
    initialState: {
        fetchedTodos: [],
        lastFetched:null
    },
    reducers: {
        setFetchTodo: (state, action) => {
            state.fetchedTodos = action.payload
            state.lastFetched = Date.now()
            // console.log(state.fetchedTodos)
        },
        addInFetchedTodos:(state,action)=>{
            state.fetchedTodos.push(action.payload)
        },

        deleteFetchedTodo: (state, action) => {
            state.fetchedTodos = state.fetchedTodos.filter((todo) => todo.id !== action.payload);
        },
    }    
})

export default fetchTodoSlice.reducer
export const {setFetchTodo,deleteFetchedTodo} = fetchTodoSlice.actions