import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './screens/register'
import { Home } from './screens/home'
import { NewProduct } from './screens/newProduct'
import { Login } from './screens/login'
import { Info } from './screens/productInfo'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../lib/query'

function App() {

  return (

    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/newProduct' element={<NewProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<Info />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>

  )
}

export default App
