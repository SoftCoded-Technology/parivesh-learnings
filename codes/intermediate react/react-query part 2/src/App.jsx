import { useState } from 'react'
import PostList from './react-query/TodoList'
import PostForm from './react-query/TodoForm'

function App() {

  return (
    <>
      <PostForm/>
      <PostList/>
    </>
  )
}

export default App
