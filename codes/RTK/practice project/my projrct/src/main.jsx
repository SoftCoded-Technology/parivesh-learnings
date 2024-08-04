import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import WishList from './pages/WishList'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
	{
		path: '/cart',
		element:<Cart/>
	},
	{
		path:'/wishlist',
		element:<WishList/>
	}

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
