import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { store } from './app/store.js'
import App from './App.jsx'
import './index.css'
import {Home,Login,Signup,Checkout,ProductDetailPage,Payment} from "./pages/index.js"

import {  } from './pages/ProductDetailPage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Signup/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
      {
        path:"/product-detail",
        element:<ProductDetailPage/>
      },
      {
        path:"/payment",
        element:<Payment/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<RouterProvider router={router}/>
</Provider>
)
