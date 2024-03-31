import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Landing from './components/landing/landing';


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
