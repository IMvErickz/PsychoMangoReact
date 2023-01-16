import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './screens/register'
import { Home } from './screens/home'
import { NewProduct } from './screens/newProduct'
import { Login } from './screens/login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/Register' element={<Register />} />
        <Route path='/newProduct' element={<NewProduct />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
