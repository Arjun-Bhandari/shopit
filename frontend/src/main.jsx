import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Home,Login,Signup,Checkout,ProductDetailPage} from "./pages/index.js"

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
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
</StrictMode>
)
