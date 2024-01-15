import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UserProvider, { UserContext } from './context/UserContext'
import Profile from './pages/Profile'

function App() {

  // State variables to store order inform
  // 
  

  return (
    <> 
     {/* UserContext.Provider is a Context Provider component from React, which provides a value to all its descendants. */}
     {/* It is passing userData and setUserData as a value to the components below it. */}
    <UserProvider>
     {/* Routes is a component from React Router that defines the routes in the application. */}
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/profile/:username' element={<Profile/>}></Route>
      </Routes>
      </UserProvider>
    </>
  )
}

export default App
