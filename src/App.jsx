import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import route from './Router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
