import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MUI from './commponents/MUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MUI/>
    </>
  )
}

export default App
