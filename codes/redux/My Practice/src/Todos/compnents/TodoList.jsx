import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Slice/todoSlice'
import FetchedTodosList from '../../FetchedTodosList'

const TodoList = () => {
  const {todos} = useSelector(state=>state.entitties.todos)
  // console.log("todos : ",todos)
    const dispatch = useDispatch()
  return (
    <>
      <h2 className=''>Todo List</h2>
      <ul className='list-group w-100 mt-3'>
        {todos?.map((todo, index) => (
          <li key={todo.id} className='list-group-item d-flex align-items-center w-100  justify-content-between'>
            {index + 1}{"."} {""}
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))} className='btn btn-outline-danger'>DELETE</button>
          </li>
        ))}
        <FetchedTodosList />
      </ul>
    </>
  )
}

export default TodoList
