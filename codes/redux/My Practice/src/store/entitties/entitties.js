import { combineReducers } from "redux";
import todoReducer from "../../Todos/Slice/todoSlice";
import userReducer from "../../Users/UserSlice";
import fetchTodosReducer from "../../Todos/Slice/fetchedtodoSlice";

export default combineReducers({
    todos:todoReducer,
    users:userReducer,
    fetchTodos:fetchTodosReducer
})