import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('https://api.github.com/users/therefat')
    .then(res => {
      return res.json()
    })
    .then((respose => {
      console.log(respose)
    })) 
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <Home/>
    </>
  )
}

export default App
