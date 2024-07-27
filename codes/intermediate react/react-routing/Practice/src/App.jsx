
import { Link, Outlet } from 'react-router-dom'
import Navbar from './componenets/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className='main'>
        <Outlet/>
      </div>
    </>
  )
}

export default App
