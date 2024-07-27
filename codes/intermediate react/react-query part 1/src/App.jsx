import { useState } from 'react'
import './App.css'
import TodoList from './react-query/TodoList'
import PostList from './react-query/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TodoList/> */}
      <PostList/>
    </>
  )
}

export default App
