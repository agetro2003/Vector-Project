import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Menu from './components/Menu/Menu'
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
   <div>
    <div> 
    <ul>
      <li> <Link to="/login/*">Login</Link></li>
      <li> <Link to="/register">Register</Link></li>
        </ul>   
    </div>
<div> 
  <Routes>
  <Route path="/login/*" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/menu" element ={<Menu/>}/>
  </Routes>

</div>
   </div>
   
  )
}

export default App
