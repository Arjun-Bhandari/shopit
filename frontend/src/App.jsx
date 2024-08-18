import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import './styles/base.scss'
import {Outlet} from 'react-router-dom';
import ProductList from './features/product-list/Product_List'
import Login from './pages/Login';
import Signup from './pages/Signup';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Navbar/>
  <main>
    {/* <Outlet/> */}
    <ProductList/>
  </main>
  <Footer/>
  </div>
  )
}

export default App
