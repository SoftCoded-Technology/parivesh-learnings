import React from 'react'
import AddTodo from './compnents/AddTodo'
import TodoList from './compnents/TodoList'

const Todos = () => {
  return (
    <>
    <div className='w-50 d-flex align-items-center flex-column justify-content-center'>
    <AddTodo/>
    <TodoList/>
    </div>
    </>
  )
}

export default Todos
