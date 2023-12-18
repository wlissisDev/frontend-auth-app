import './App.css'
import { Login } from './pages/Login';
import { Products } from './pages/Products';
import { Register } from './pages/Register';
import { PrivateRoute } from './utils/PrivateRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/products' element={<Products />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    


  )
}

export default App
