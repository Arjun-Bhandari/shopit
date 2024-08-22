import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import './styles/base.scss'
import {Outlet} from 'react-router-dom';

function App() {
  
  return (
    <div>
  
  <Navbar/>
  <main>
    <Outlet/>
  </main>
  <Footer/>

  </div>
  )
}

export default App
