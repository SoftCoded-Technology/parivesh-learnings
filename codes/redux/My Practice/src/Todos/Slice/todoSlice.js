import { createSlice, nanoid } from "@reduxjs/toolkit";
// import todoReducer from "../reducers/todoReducer";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Learn Redux",
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { 
    // todoByUser:(todos,action)=>{
    //   const {todoId,userId} = action.payload
    //   const index = todos.todos.findIndex(todo => todo.id === todoId)
    //   todos[index].users.userId = userId
    // },
    addTodo: (state, action) => {
        const todo ={
            id:nanoid(),
            text:action.payload
        }
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, todoByUser } = todoSlice.actions;
export default todoSlice.reducer;
