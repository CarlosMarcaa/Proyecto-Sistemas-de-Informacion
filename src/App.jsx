import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from '../src/components/Landing'
import Login from '../src/components/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route 
          exact path='/'
          element={<Landing />}
          />
          <Route 
          exact path='/login'
          element={<Login />}
          />
          {/* <Route 
          exact path='/register'
          element={<Register />}
          />
          <Route 
          exact path='/groups'
          element={<Groups />}
          />
          <Route 
          exact path='/sports'
          element={<Sports />}
          /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
