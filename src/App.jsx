import { useState } from 'react'
import './App.css'
import Landing from '../src/components/Landing'
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import RegisterC from '../src/components/RegisterC'
import Groups from '../src/components/Groups'
import Sports from '../src/components/Sports'
import Dashboard from '../src/components/Dashboard'
import Search from '../src/components/Search'

import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';
import './App.css';


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
          <Route 
          exact path='/register'
          element={<Register />}
          />
          <Route 
          exact path='/registerc'
          element={<RegisterC />}
          />
          <Route 
          exact path='/groups'
          element={<Groups />}
          />
          <Route 
          exact path='/sports'
          element={<Sports />}
          />
          <Route 
          exact path='/dashboard'
          element={<Dashboard />}
          />
          {/* <Route 
          exact path='/search'
          element={<Search />}
          /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
