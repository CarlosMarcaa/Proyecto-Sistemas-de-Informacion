import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom';
import './App.css';
import Landing from './components/landing/landing';
import Login from './components/login/login';


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
            
        </Routes>
      </Router>
    </>
  )
}

export default App
