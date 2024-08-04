import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/MainNavbar'

function App() {

  return (
    <>
		<Navbar/>
    <div className='mt-24'>
		<Outlet/>
    </div>
    </>
  )
}

export default App
