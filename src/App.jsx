import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from '../src/components/Landing'

import Login from '../src/components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      {/*<Login/>*/}
    </>
  )
}

export default App
