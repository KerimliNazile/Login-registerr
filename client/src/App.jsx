import { useState } from 'react'
import './App.css'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import Login from './Pages/LoginPage'
import SignIn from './Pages/SignInPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path="/"  element={<Main/>}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
