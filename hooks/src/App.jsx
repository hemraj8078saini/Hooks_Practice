import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Callbackused from "./components/Callbackused.jsx"
import ComA from "./components/ComA.jsx" // corrected import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <callback_used/>
    </>
  )
}

export default App
