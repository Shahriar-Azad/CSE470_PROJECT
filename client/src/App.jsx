import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./Components/signup"
import Login from './Components/login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/signup" element={<Signup />}></Route>
      <Route path= "/login" element={<Login />}></Route>
      

      
    </Routes>
    </BrowserRouter>
  )
}

export default App