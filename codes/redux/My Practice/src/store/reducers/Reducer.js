import { combineReducers } from "redux";
import entitties from "../entitties/entitties";

export default combineReducers({
    entitties: entitties
})














































































// import { nanoid } from "@reduxjs/toolkit"
// import { ADD_TODO, DELETE_TODO } from "../actions/actions"

// const todoReducer = (state=[], action) => {

//     switch (action?.type) {
//         case ADD_TODO:
//             console.log(state)
//             return[
//                 ...state,{
//                     id: nanoid(),
//                     text: action.payload
//                 }
//             ]
//         case DELETE_TODO:
//             console.log(state)
//             return state.filter(todo => todo.id !== action.payload)
//         default:
//             console.log(state)
//             return state 
//     }
    
// }

// export default todoReducer